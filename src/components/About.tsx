// Node modules 

import { motion } from "motion/react";


// Custom modules 

import { fadeUp, staggerContainer } from "@/lib/animations";

// Components

import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";


export const About = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className="mt-30 scroll-mt-10"
            id="about"
        >
            <SectionHeader 
                subtitle="About"
                title="Transforming complexity into effortless design"
            />

            <motion.p
                variants={fadeUp}
                className="mt-4 text-neutral-300"    
            >
                I'm a career-switcher who moved from history and research into 
                software development. After completing a hands-on ReactJS program 
                with ComIT and the Fullstack Developer Path on Scrimba, I've been 
                building real projects — from an e-commerce marketplace to an 
                interactive game — to sharpen my skills in Javascript, React, TypeScript, and 
                modern web development.
            </motion.p>

            <motion.p
                variants={fadeUp}
                className="mt-2 text-neutral-300"    
            >
                I don't have professional work experience yet, but I bring strong 
                research discipline, attention to detail, and a genuine drive to 
                keep learning — qualities I'm now applying to writing clean, 
                well-structured code. I'm currently looking for my first opportunity 
                to grow as a developer and contribute to a team.
            </motion.p>

            <motion.div
                variants={fadeUp}
                transition={{ delay:0.2 }}
            >
                <Button className="mt-5">Contact me</Button>
            </motion.div>

        </motion.section>
    )
}