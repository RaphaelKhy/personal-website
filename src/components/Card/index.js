import { useContext } from 'react'
import { motion } from 'framer-motion'
import { themeTransitionContext } from '../../App'
import { StyledCard } from './style'

export const Card = ({ children }) => {
    const isTransition = useContext(themeTransitionContext)
    return (
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                type: 'tween',
                ease: 'easeInOut',
                duration: 0.7,
            }}
            viewport={{ once: true }}
        >
            <StyledCard isTransition={isTransition}>{children}</StyledCard>
        </motion.div>
    )
}
