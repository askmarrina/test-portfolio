import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { IOptions, RecursivePartial, OutMode } from "@tsparticles/engine";

export const Particle = () => {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        });
    }, []);

    const options: RecursivePartial<IOptions> = useMemo(
        () => ({
            // background: { color: { value: "#0d47a1" } },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: { enable: true, mode: "push" as const },
                    onHover: { enable: true, mode: "repulse" as const },
                    resize: { enable: true },
                },
                modes: {
                    push: { quantity: 4 },
                    repulse: { distance: 200, duration: 0.4 },
                },
            },
            particles: {
                color: { value: "#ffffff" },
                links: { color: "#ffffff", distance: 200, enable: true, opacity: 0.5, width: 1 },
                move: {
                    enable: true,
                    speed: 2,
                    outModes: { default: "bounce" as OutMode }, 
                },
                number: { value: 50, density: { enable: true, area: 1000 } },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 0.2, max: 1 } },
            },
            detectRetina: true,
        }),
        []
    );

    return <Particles id="tsparticles" options={options} />;
};
