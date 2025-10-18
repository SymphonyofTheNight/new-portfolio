import type { Project } from "./types/Project"

// img 
import musicbass from '../../assets/imgs/musicbass.webp'
import aesthetic_capture from '../../assets/imgs/aesthetic_capture.webp'

export const projects: Project[] = [
    {
        "id": 1,
        "title": "Tropical",
        "description": "Where every frame feels alive.",
        "image": aesthetic_capture,
        "technologies": ["React", "Tailwind CSS", "TypeScript"],
        "githubUrl": "",
        "liveDemoUrl": ""
    },
    {
        "id": 2,
        "title": "Entropy",
        "description": "Every note. Every pulse. Every vibe.",
        "image": musicbass,
        "technologies": ["React", "Tailwind CSS", "TypeScript"],
        "githubUrl": "",
        "liveDemoUrl": ""
    },
]