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
                About me information
            </motion.p>

            <motion.p
                variants={fadeUp}
                className="mt-2 text-neutral-300"    
            >
                About me information
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