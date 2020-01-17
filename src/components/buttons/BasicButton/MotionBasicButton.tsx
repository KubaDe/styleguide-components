import React from 'react'
import { motion, AnimationProps, Variants, MotionProps } from 'framer-motion'

import BasicButton, { BasicButtonProps } from './BasicButton'

export type MotionBasicButtonProps = AnimationProps &
  MotionProps &
  BasicButtonProps

const MotionBasicButton: React.FC<MotionBasicButtonProps> = motion.custom(
  BasicButton,
)

export default MotionBasicButton
