
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Ellipse, Line, G } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
}

// Two kidneys with renal tubules
export function RenalIcon({ size = 48, color = '#4A90E2' }: IconProps) {
  return (
    <View style={[styles.iconContainer, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        {/* Left Kidney */}
        <Path
          d="M14 10C10 10 8 14 8 18C8 22 8 28 10 32C12 36 14 38 16 38C18 38 19 36 19 34C19 32 18 30 18 28C18 26 19 24 19 22C19 20 18 18 18 16C18 14 18 12 16 10C15 9 14.5 10 14 10Z"
          fill={color}
          opacity={0.8}
        />
        {/* Left Kidney Tubules */}
        <Path
          d="M12 16C12 16 13 17 14 17C15 17 16 16 16 16M12 20C12 20 13 21 14 21C15 21 16 20 16 20M12 24C12 24 13 25 14 25C15 25 16 24 16 24M12 28C12 28 13 29 14 29C15 29 16 28 16 28"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={0.6}
        />
        
        {/* Right Kidney */}
        <Path
          d="M34 10C38 10 40 14 40 18C40 22 40 28 38 32C36 36 34 38 32 38C30 38 29 36 29 34C29 32 30 30 30 28C30 26 29 24 29 22C29 20 30 18 30 16C30 14 30 12 32 10C33 9 33.5 10 34 10Z"
          fill={color}
          opacity={0.8}
        />
        {/* Right Kidney Tubules */}
        <Path
          d="M36 16C36 16 35 17 34 17C33 17 32 16 32 16M36 20C36 20 35 21 34 21C33 21 32 20 32 20M36 24C36 24 35 25 34 25C33 25 32 24 32 24M36 28C36 28 35 29 34 29C33 29 32 28 32 28"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={0.6}
        />
      </Svg>
    </View>
  );
}

// Stomach/Pylorus icon
export function StomachIcon({ size = 48, color = '#4A90E2' }: IconProps) {
  return (
    <View style={[styles.iconContainer, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        {/* Stomach body */}
        <Path
          d="M20 12C18 12 16 13 15 15C14 17 14 19 14 21C14 23 13 25 13 27C13 29 13 31 14 33C15 35 17 37 19 38C21 39 23 39 25 39C27 39 29 39 31 38C33 37 35 35 36 33C37 31 37 29 37 27C37 25 36 23 35 21C34 19 32 17 30 16C28 15 26 14 24 13C22 12 21 12 20 12Z"
          fill={color}
          opacity={0.8}
        />
        {/* Esophagus connection */}
        <Path
          d="M22 8C22 8 22 10 22 12"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Pylorus (exit to duodenum) */}
        <Path
          d="M32 30C32 30 34 30 36 31C38 32 39 33 40 35"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Stomach folds */}
        <Path
          d="M18 20C18 20 20 21 22 21M18 24C18 24 20 25 22 25M18 28C18 28 20 29 22 29"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={0.5}
        />
      </Svg>
    </View>
  );
}

// U-shape with renal tubules and bladder
export function UrologyIcon({ size = 48, color = '#4A90E2' }: IconProps) {
  return (
    <View style={[styles.iconContainer, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        {/* Left ureter with tubules (forming left side of U) */}
        <Path
          d="M16 8C16 8 16 12 16 16C16 20 16 24 16 28"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Left tubules */}
        <Path
          d="M14 12C14 12 15 13 16 13M14 16C14 16 15 17 16 17M14 20C14 20 15 21 16 21M14 24C14 24 15 25 16 25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={0.6}
        />
        
        {/* Right ureter with tubules (forming right side of U) */}
        <Path
          d="M32 8C32 8 32 12 32 16C32 20 32 24 32 28"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Right tubules */}
        <Path
          d="M34 12C34 12 33 13 32 13M34 16C34 16 33 17 32 17M34 20C34 20 33 21 32 21M34 24C34 24 33 25 32 25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={0.6}
        />
        
        {/* Bladder (bottom of U) */}
        <Ellipse
          cx="24"
          cy="36"
          rx="10"
          ry="8"
          fill={color}
          opacity={0.8}
        />
        {/* Connection lines from ureters to bladder */}
        <Path
          d="M16 28C16 28 18 32 20 34M32 28C32 28 30 32 28 34"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Bladder detail */}
        <Path
          d="M24 32C24 32 24 36 24 38"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          opacity={0.5}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
