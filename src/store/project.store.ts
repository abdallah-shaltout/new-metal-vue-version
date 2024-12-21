import { defineStore } from 'pinia'
import { ref } from 'vue'
import projectsJson from '@/assets/data/projects.json'
import serviceJson from '@/assets/data/services.json'

export interface projectType {
    id: string
    imagesCount: number
    projectIndex: number
    'service-id': string
}
export interface serviceType {
    id: string
    idx: number
    iconName: string
    slug: string
}

export interface projectImageType {
    src: string
    alt: string
    id: string
}
export const useProjectStore = defineStore('project', () => {
    const projects = ref<projectType[]>([...projectsJson])
    const services = ref<serviceType[]>([...serviceJson])

    const getServiceById = (serviceId: string) => {
        return services.value.find((service) => service.id === serviceId)
    }
    const getServiceBySlug = (serviceSlug: string) => {
        return services.value.find((service) => service.slug === serviceSlug)
    }

    function getProjectsByService(serviceId: string) {
        return projects.value.filter((project) => project['service-id'] === serviceId)
    }

    function getProjectsImages({
        page = 1,
        limit = 10,
        service = '',
    }: { page?: number; limit?: number; service?: string | undefined } = {}): {
        images: { src: string; alt: string; id: string }[]
        total: number
        hasNext: boolean
    } {
        const __projects = projects.value
            .filter((project) => {
                const serviceId = getServiceBySlug(service)?.id
                if (service && serviceId) {
                    return serviceId === project['service-id']
                }
                return true
            })
            .map((project) => {
                const { imagesCount, projectIndex, id } = project
                const service = getServiceById(project['service-id'])
                return {
                    id,
                    images: Array.from(
                        { length: imagesCount },
                        (_, i) => `/services/${service?.slug}/${projectIndex}/${i + 1}.webp`,
                    ),
                }
            })
            .map((project) => {
                const { images, id } = project
                return images.map((image, idx) => {
                    return {
                        src: image,
                        alt: `Project ${id} Image ${idx + 1}`,
                        id: `${id}-${idx + 1}`,
                    }
                })
            })

        const images = __projects.flat()

        const total = images.length
        const start = (page - 1) * limit
        const end = page * limit
        const hasNext = end < total
        return {
            images: images.slice(start, end),
            total,
            hasNext,
        }
    }

    return { projects, getProjectsByService, getProjectsImages, getServiceBySlug }
})
