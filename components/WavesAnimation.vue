<template>
  <div id="iviewBg"></div>
</template>

<script>
import * as THREE from "three";
import { onMounted } from "vue";
export default {
  props: {
    // control x Length of axial wave
    amountX: {
      type: Number,
      default: 50,
    },
    // control y Length of axial wave
    amountY: {
      type: Number,
      default: 50,
    },
    // Control point color
    color: {
      type: String,
      default: "#1b1b1b",
    },
    // Control the position of the waves
    top: {
      type: Number,
      default: 350,
    },
  },

  setup(props) {
    const SEPARATION = 100;

    // let stats;
    let container, camera, scene, renderer;

    let particles,
      count = 0;

    let mouseX = 0;

    let windowHalfX = window.innerWidth / 2;

    function init() {
      container = document.createElement("div");
      document.getElementById("iviewBg").appendChild(container);

      // Create a perspective camera
      camera = new THREE.PerspectiveCamera(
        75, // Camera cone vertical field of view angle
        window.innerWidth / window.innerHeight, // Camera cone aspect ratio
        1, // Camera cone near end face
        10000 // Far end of camera cone
      );

      // Set up the camera z Axial field of view
      camera.position.z = 1000;

      // Create a scene
      scene = new THREE.Scene();

      const numParticles = props.amountX * props.amountY;

      const positions = new Float32Array(numParticles * 3);
      const scales = new Float32Array(numParticles);

      let i = 0,
        j = 0;

      //  Initialize particle position and size
      for (let ix = 0; ix < props.amountX; ix++) {
        for (let iy = 0; iy < props.amountY; iy++) {
          positions[i] = ix * SEPARATION - (props.amountX * SEPARATION) / 2; // x
          positions[i + 1] = 0; // y
          positions[i + 2] = iy * SEPARATION - (props.amountY * SEPARATION) / 2; // z
          scales[j] = 1;
          i += 3;
          j++;
        }
      }

      // It's a patch 、 A valid representation of line or point geometry . Including vertex positions , Patch index 、 Normal phasor 、 Color value 、UV  Coordinates and custom cache attribute values . Use  BufferGeometry  Can effectively reduce the risk of  GPU  The overhead required to transmit the above data
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

      // Shader material (ShaderMaterial), Set the size of the ball , Color , etc.
      const material = new THREE.ShaderMaterial({
        uniforms: {
          // Set the color of the ball
          color: {
            value: new THREE.Color(props.color),
          },
        },
        // Control the size of the ball
        vertexShader:
          "attribute float scale; void main() {vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );gl_PointSize = scale * ( 300.0 / - mvPosition.z );gl_Position = projectionMatrix * mvPosition;}",
        fragmentShader:
          "uniform vec3 color;void main() {if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;gl_FragColor = vec4( color, 1.0 );}",
      });

      // A class for displaying points .
      particles = new THREE.Points(geometry, material);
      // Add points to the scene
      scene.add(particles);

      //alpha - canvas Does it include alpha ( transparency ). The default is  false.
      // The background color of the renderer defaults to black , Set the background color of the renderer to transparent
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearAlpha(0);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      // Show upper right corner fps box
      // stats = new Stats();
      // container.appendChild(stats.dom);

      container.style.touchAction = "none";
      // Monitor mouse movement events
      container.addEventListener("pointermove", onPointerMove);

      // Adjust the position of the wave
      container.style.position = "relative";
      container.style.top = `${props.top}px`;

      window.addEventListener("resize", onWindowResize);
    }

    function render() {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y = 400;
      camera.lookAt(scene.position);

      const positions = particles.geometry.attributes.position.array;
      const scales = particles.geometry.attributes.scale.array;

      //  Set particle position and size
      let i = 0,
        j = 0;
      for (let ix = 0; ix < props.amountX; ix++) {
        for (let iy = 0; iy < props.amountY; iy++) {
          positions[i + 1] =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50;

          scales[j] =
            (Math.sin((ix + count) * 0.3) + 1) * 10 +
            (Math.sin((iy + count) * 0.5) + 1) * 10;

          i += 3;
          j++;
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.scale.needsUpdate = true;

      renderer.render(scene, camera);

      count += 0.1;
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Monitor mouse movement events
    function onPointerMove(event) {
      if (event.isPrimary === false) return;
      mouseX = event.clientX - windowHalfX;
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
      //fps  Real time updates
      // stats.update();
    }

    onMounted(() => {
      init();
      animate();
    });
    return {};
  },
};
</script>

<style scoped>
#iviewBg {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
