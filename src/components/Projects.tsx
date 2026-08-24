// Node modules 

import { motion } from "motion/react"


// Custom modules

import { fadeUp, staggerContainer } from "@/lib/animations"


// Components 



// Constants 

import { projectsData } from "@/constants"


export const Projects = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className="mt-30 scroll-mt-10"
            id="projects"
        >
           <SectionHeader />
        </motion.section>
    )
}