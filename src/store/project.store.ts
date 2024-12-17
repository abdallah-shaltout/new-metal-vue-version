import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import projectsJson from '@/assets/data/projects.json'

interface projectType {
    id: number
    title: string
    images: string[]
    isSpecial: boolean
    sections: string[]
    overflows: {
        title: string
        description: string
    }[]
    client?: ''
    size: {
        cols: number
        rows: number
        'md-cols': number
        'md-rows': number
        'sm-cols': number
        'sm-rows': number
    }
    projectSize: {
        width: number
        height: number
    }
}
export const useProjectStore = defineStore('project', () => {
    const projects = ref<projectType[]>([...projectsJson])

    const spciealProjects = computed(() => {
        return projects.value.filter((project) => project.isSpecial)
    })

    function getProjectById(id: number) {
        return projects.value.find((project) => project.id === id)
    }

    function getProjectsBySection(section: string) {
        return projects.value.filter((project) => project.sections.includes(section))
    }

    function getProjectsByClient(client: string) {
        return projects.value.filter((project) => project?.client === client)
    }

    return { projects, spciealProjects, getProjectById, getProjectsBySection, getProjectsByClient }
})
