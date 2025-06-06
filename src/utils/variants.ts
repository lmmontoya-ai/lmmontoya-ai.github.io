// src/utils/variants.ts
// Semantic component variants using custom color tokens

import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";

// Utility function to merge classes
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Button component variants - Using semantic color utilities
export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "font-semibold",
    "tracking-tight",
    "relative",
    "overflow-hidden",
    "transition-theme",
    "focus-ring",
    "disabled:opacity-50",
    "disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-interactive-blue",
          "text-content-inverse",
          "border",
          "border-transparent",
          "shadow-themed-sm",
          "transition-spring",
          "hover:shadow-themed-md",
          "focus-ring",
        ],
        secondary: [
          "bg-transparent",
          "text-primary",
          "border-2",
          "border-primary",
          "backdrop-blur-sm",
          "hover:text-interactive-blue",
          "hover:border-interactive-blue",
          "hover:bg-interactive-blue/5",
          "transition-spring",
          "hover:shadow-themed-sm",
          "focus-ring",
        ],
        outline: [
          "bg-transparent",
          "text-secondary",
          "border",
          "border-subtle",
          "hover:border-interactive-blue",
          "hover:text-primary",
          "transition-spring",
          "focus-ring",
        ],
        roadmap: [
          "border",
          "border-transparent",
          "shadow-themed-sm",
          "transition-spring",
          "hover:shadow-themed-md",
          "font-semibold",
          "focus-ring",
        ],
      },
      size: {
        sm: ["text-sm", "px-3", "py-1.5", "rounded-md"],
        md: ["px-4", "py-2", "rounded-lg"],
        lg: ["text-lg", "px-6", "py-3", "rounded-lg"],
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      rounded: {
        true: "rounded-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      rounded: false,
    },
  }
);

// Card component variants - Using semantic utilities
export const cardVariants = cva(
  [
    "relative",
    "overflow-hidden",
    "rounded-2xl",
    "transition-spring",
    "bg-surface-secondary",
    "backdrop-blur-sm",
    "border",
    "border-primary",
    "shadow-themed-sm",
    "p-8",
    "lg:p-10",
  ],
  {
    variants: {
      interactive: {
        true: [
          "group",
          "hover:-translate-y-1",
          "hover:shadow-themed-lg",
          "hover:border-interactive-blue/20",
          "cursor-pointer",
        ],
        false: "",
      },
      featured: {
        true: ["border-l-4", "border-l-interactive-blue"],
        false: "",
      },
    },
    defaultVariants: {
      interactive: false,
      featured: false,
    },
  }
);

// UpdateCard component variants - Using semantic utilities with enhanced spring animations
export const updateCardVariants = cva(
  [
    "update-card",
    "relative",
    "block",
    "group",
    "p-4",
    "px-5",
    "rounded-lg",
    "transition-spring", // Using spring transition for smooth animations
    "focus-ring",
    "bg-surface-secondary/50",
    "backdrop-blur-sm",
    // Removed hover:translate-x-1 to prevent text movement - movement is handled by CSS transform
  ],
  {
    variants: {
      variant: {
        milestone: [
          "update-card-milestone",
          "hover-milestone",
        ],
        project: [
          "update-card-project",
          "hover-project",
        ],
        resource: [
          "update-card-resource",
          "hover-resource",
        ],
        literature: [
          "update-card-literature",
          "hover-resource",
        ]
      },
    },
    defaultVariants: {
      variant: "milestone",
    },
  }
);

// Icon variants for UpdateCard - Using semantic utilities with enhanced animations
export const updateCardIconVariants = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "w-9",
    "h-9",
    "flex-shrink-0",
    "transition-spring", // Spring animation for smooth icon interactions
    "group-hover:scale-110", // Subtle scale on hover
    "group-hover:rotate-3", // Slight rotation for playfulness
  ],
  {
    variants: {
      variant: {
        milestone: ["text-milestone"],
        project: ["text-project"],
        resource: ["text-resource"],
        literature: ["text-resource"],
      },
    },
    defaultVariants: {
      variant: "milestone",
    },
  }
);

// Tag variants for UpdateCard - Using semantic utilities
export const updateCardTagVariants = cva(
  [
    "font-mono",
    "text-xs",
    "font-medium",
    "tracking-wide",
    "uppercase",
    "inline-block",
    "mb-1.5",
    "transition-theme",
  ],
  {
    variants: {
      variant: {
        milestone: ["text-milestone"],
        project: ["text-project"],
        resource: ["text-resource"],
        literature: ["text-resource"],
      },
    },
    defaultVariants: {
      variant: "milestone",
    },
  }
);

// Title variants for UpdateCard - Using semantic utilities with enhanced hover effects
export const updateCardTitleVariants = cva(
  [
    "font-semibold",
    "mb-1.5",
    "font-sans",
    "leading-tight",
    "text-base",
    "text-primary",
    "transition-spring", // Spring transition for smooth color changes
    "group-hover:translate-x-1", // Subtle slide on hover
  ],
  {
    variants: {
      variant: {
        milestone: ["group-hover:text-milestone"],
        project: ["group-hover:text-project"],
        resource: ["group-hover:text-resource"],
        literature: ["group-hover:text-resource"],
      },
    },
    defaultVariants: {
      variant: "milestone",
    },
  }
);

// Project Card Variants
export const projectCardVariants = cva(
  [
    "group",
    "relative",
    "overflow-hidden",
    "rounded-xl",
    "bg-surface-secondary/80",
    "backdrop-blur-sm",
    "border",
    "border-primary",
    "p-6",
    "min-h-80", // Standardized minimum height for consistent sizing
    "flex",
    "flex-col",
    "transition-spring",
    "hover:shadow-themed-lg",
    "hover:-translate-y-1",
  ],
  {
    variants: {
      status: {
        completed: ["border-l-4", "border-l-[oklch(var(--color-status-success))]"],
        "in-progress": ["border-l-4", "border-l-[oklch(var(--color-status-warning))]"],
        planned: ["border-l-4", "border-l-[oklch(var(--color-interactive-blue))]"],
        published: ["border-l-4", "border-l-[oklch(var(--color-interactive-blue))]"],
        draft: ["border-l-4", "border-l-[oklch(var(--color-border-subtle))]"],
        archived: ["border-l-4", "border-l-[oklch(var(--color-text-tertiary))]"],
      },
    },
    defaultVariants: {
      status: "in-progress",
    },
  }
);

// Literature Card Variants
export const literatureCardVariants = cva(
  [
    "group",
    "relative",
    "overflow-hidden",
    "rounded-xl",
    "bg-surface-secondary/80",
    "backdrop-blur-sm",
    "border",
    "border-primary",
    "p-6",
    "min-h-80", // Standardized minimum height for consistent sizing
    "flex",
    "flex-col",
    "transition-spring",
    "hover:shadow-themed-lg",
    "hover:border-interactive-blue/30",
    "hover:-translate-y-1",
  ],
  {
    variants: {
      type: {
        Paper: ["bg-gradient-to-br", "from-surface-secondary/80", "to-[oklch(var(--color-interactive-blue)/0.05)]"],
        Book: ["bg-gradient-to-br", "from-surface-secondary/80", "to-[oklch(var(--color-status-success)/0.05)]"],
        Video: ["bg-gradient-to-br", "from-surface-secondary/80", "to-[oklch(var(--color-accent-tutorial)/0.05)]"],
        Blog: ["bg-gradient-to-br", "from-surface-secondary/80", "to-[oklch(var(--color-status-warning)/0.05)]"],
        Course: ["bg-gradient-to-br", "from-surface-secondary/80", "to-[oklch(var(--color-accent-update)/0.05)]"],
      },
    },
    defaultVariants: {
      type: "Paper",
    },
  }
);

// Blog Card Variants
export const blogCardVariants = cva(
  [
    "group",
    "relative",
    "overflow-hidden",
    "rounded-xl",
    "bg-surface-secondary/80",
    "backdrop-blur-sm",
    "border",
    "border-primary",
    "p-6",
    "min-h-80", // Standardized minimum height for consistent sizing
    "flex",
    "flex-col",
    "transition-spring",
    "hover:shadow-themed-lg",
    "hover:-translate-y-1",
  ],
  {
    variants: {
      category: {
        Research: ["border-l-4", "border-l-[oklch(var(--color-interactive-blue))]"],
        Technical: ["border-l-4", "border-l-[oklch(var(--color-status-success))]"],
        Reflection: ["border-l-4", "border-l-[oklch(var(--color-interactive-gold))]"],
        Resource: ["border-l-4", "border-l-[oklch(var(--color-status-warning))]"],
        Tutorial: ["border-l-4", "border-l-[oklch(var(--color-accent-tutorial))]"],
        Update: ["border-l-4", "border-l-[oklch(var(--color-accent-update))]"],
      },
    },
    defaultVariants: {
      category: "Research",
    },
  }
);

// Export types for component props
export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type CardVariants = VariantProps<typeof cardVariants>;
export type UpdateCardVariants = VariantProps<typeof updateCardVariants>;
export type UpdateCardIconVariants = VariantProps<typeof updateCardIconVariants>;
export type UpdateCardTagVariants = VariantProps<typeof updateCardTagVariants>;
export type UpdateCardTitleVariants = VariantProps<typeof updateCardTitleVariants>;
export type ProjectCardVariants = VariantProps<typeof projectCardVariants>;
export type LiteratureCardVariants = VariantProps<typeof literatureCardVariants>;
export type BlogCardVariants = VariantProps<typeof blogCardVariants>;

// NavLink component variants - Using semantic utilities
export const navLinkVariants = cva(
  [
    "relative",
    "group",
    "transition-spring",
  ],
  {
    variants: {
      variant: {
        desktop: [
          "flex",
          "items-center",
          "h-10",
          "px-3",
          "font-medium",
          "font-mono",
          "text-sm",
          "rounded-lg",
        ],
        mobile: [
          "py-3",
          "border-b",
          "border-subtle",
          "flex",
          "items-center",
          "justify-between",
          "font-mono",
          "transform",
          "hover:translate-x-1",
        ],
      },
      active: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "desktop",
        active: true,
        class: "text-interactive-blue",
      },
      {
        variant: "desktop",
        active: false,
        class: "text-primary hover:text-interactive-blue",
      },
      {
        variant: "mobile",
        active: true,
        class: "text-interactive-blue border-interactive-blue/30",
      },
      {
        variant: "mobile",
        active: false,
        class: "text-primary hover:text-interactive-blue",
      },
    ],
    defaultVariants: {
      variant: "desktop",
      active: false,
    },
  }
);

export type NavLinkVariants = VariantProps<typeof navLinkVariants>;