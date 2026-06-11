import { motion } from "motion/react";
import type { ReactNode } from "react";

interface FadeInAnimationProps {
	children: ReactNode;
	delay?: number;
}

export default function FadeInAnimation({
	children,
	delay = 0,
}: FadeInAnimationProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay }}
		>
			{children}
		</motion.div>
	);
}
