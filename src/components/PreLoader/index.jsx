import { motion } from 'framer-motion';
import './styles.scss';

const PreLoader = () => {
    const LoadingDot = {
        display: "block",
        width: "0.5rem",
        height: "0.5rem",
        backgroundColor: "black",
        borderRadius: "50%"
      };
      
      const LoadingContainer = {
        width: "5rem",
        height: "2rem",
        display: "flex",
        justifyContent: "space-around"
      };
      
      const ContainerVariants = {
        initial: {
          transition: {
            staggerChildren: 0.2
          }
        },
        animate: {
          transition: {
            staggerChildren: 0.2
          }
        }
      };
      
      const DotVariants = {
        initial: {
          y: "0%"
        },
        animate: {
          y: "100%"
        }
      };
      
      const DotTransition = {
        duration: 0.5,
        yoyo: Infinity,
        ease: "easeInOut"
      };

    return (
        <div className="loader-wrapper">
           <div className="loader" >
                <motion.div
                    style={LoadingContainer}
                    variants={ContainerVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.span
                    style={LoadingDot}
                    variants={DotVariants}
                    transition={DotTransition}
                    />
                    <motion.span
                    style={LoadingDot}
                    variants={DotVariants}
                    transition={DotTransition}
                    />
                    <motion.span
                    style={LoadingDot}
                    variants={DotVariants}
                    transition={DotTransition}
                    />
                </motion.div>
            </div> 
        </div>
    )
}

export default PreLoader;
