import type { Project } from "./types/Project"
import type { Services } from "./types/Services"

// img 
import musicbass from '../../assets/imgs/musicbass.webp'
import cosmic from '../../assets/imgs/cosmic.jpg'
import aesthetic_capture from '../../assets/imgs/aesthetic_capture.webp'

export const projects: Project[] = [
    {
        "id": 1,
        "title": "Tropical",
        "description": "Where every frame feels alive.",
        "full_description": "",
        "image": aesthetic_capture,
        "technologies": ["React", "Tailwind CSS", "TypeScript"],
        "githubUrl": "",
        "liveDemoUrl": "",
        "credits": "Gino Dela Vega",
        "role": "Developer",
        "year": "2025"
    },
    {
        "id": 2,
        "title": "Reverse",
        "description": "Every note. Every pulse. Every vibe.",
        "full_description": "",
        "image": cosmic,
        "technologies": ["React", "Tailwind CSS", "TypeScript"],
        "githubUrl": "",
        "liveDemoUrl": "",
        "credits": "Gino Dela Vega",
        "role": "Developer",
        "year": "2025"
    },
]

export const services: Services[] = [
    {
        "title": "Full-Stack",
        "description": "I build solid, well-structured web applications that balance usability and performance. From the front end to the backend, every part is designed to work smoothly and reliably."
    },
    {
        "title": "UI/UX Interface",
        "description": "I design and develop interfaces that feel intuitive, responsive, and visually clear. My focus is on creating a seamless experience that supports the user’s goals."
    },
    {
        "title": "API Integration",
        "description": "I connect services and data in a way that keeps everything running consistently. Integrations are handled with care so your platform stays efficient and dependable."
    },
    {
        "title": "Optimization",
        "description": "I fine-tune performance, clean up code, and keep your site updated. The goal is a fast, stable experience that grows with your needs."
    }
]

