let scene, camera, renderer, line, curve, mouse = new THREE.Vector2();

        const positions = [
            new THREE.Vector3(-10, -10, 0),
            new THREE.Vector3(0, 10, 0),
            new THREE.Vector3(10, -10, 0)
        ];

        init();
        animate();

        function init() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 50;
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            curve = new THREE.CatmullRomCurve3(positions, true);
            const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));
            const material = new THREE.LineBasicMaterial({ color: 0xff00ff });
            line = new THREE.Line(geometry, material);
            scene.add(line);

            document.addEventListener('mousemove', onMouseMove, false);
            window.addEventListener('resize', onWindowResize, false);
        }

        function animate() {
            requestAnimationFrame(animate);
            render();
        }

        function render() {
            const point = curve.getPoint(mouse.x).multiplyScalar(1.5);
            line.position.copy(point);
            renderer.render(scene, camera);
        }

        function onMouseMove(event) {
            event.preventDefault();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight
        }




