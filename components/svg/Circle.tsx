import { m } from 'framer-motion'
import { useState } from 'react'

type Props = {
  className: string
}

const Circle = ({ className }: Props) => {
  const [isHovered, setHovered] = useState(false)

  const circle = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: 'spring', duration: 0.5, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    },
  }

  return (
    <m.svg
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      preserveAspectRatio="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      clipRule="evenodd"
      viewBox="200 100 1000 700"
      initial={false}
      transform="rotate(10)"
      animate={isHovered ? 'visible' : 'hidden'}
    >
      <m.path
        variants={circle}
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        d="M961.875 202.5c-46.546 0-92.158.015-138.75 5-24.931 2.668-49.767 6.439-74.375 11.25-30.85 6.031-61.483 13.226-91.875 21.25-66.756 17.625-132.371 40.05-196.25 66.25-20.786 8.525-41.582 17.267-61.25 28.125-26.467 14.611-52.853 29.77-76.875 48.125-16.856 12.88-33.016 27.496-45 45-7.113 10.39-12.595 23.813-10.625 36.25 1.767 11.153 11.245 20.587 20.625 26.875 10.509 7.045 23.968 8.211 36.25 11.25 7.98 1.974 16.17 3.245 24.375 3.75 18.927 1.165 37.925 1.94 56.875 1.25 32.559-1.186 65.185-2.722 97.5-6.875 34.247-4.402 68.089-11.626 101.875-18.75 35.403-7.464 70.745-15.385 105.625-25 36.207-9.981 72.007-21.468 107.5-33.75 35.578-12.312 70.612-26.161 105.625-40 26.663-10.539 53.037-21.8 79.375-33.125 15.33-6.593 30.82-12.919 45.62-20.625 15.66-8.15 31.76-15.964 45.63-26.875 7.93-6.235 16.06-14.028 18.75-23.75 2.17-7.842-.45-17.476-5.63-23.75-6.59-7.992-17.24-11.811-26.87-15.625-20.52-8.124-41.56-15.28-63.13-20-27.136-5.941-54.856-9.043-82.495-11.875-23.245-2.382-46.64-3.168-70-3.75-26.867-.669-53.791-1.475-80.625 0-33.863 1.862-67.865 4.031-101.25 10-35.564 6.358-70.586 15.879-105 26.875-36.118 11.541-71.238 26.069-106.25 40.625-20.652 8.586-41.151 17.751-60.625 28.75-25.613 14.467-50.901 29.772-74.375 47.5-16.7 12.612-33.004 26.432-45.625 43.125-7.235 9.569-11.048 21.841-12.5 33.75-.75 6.149 1.001 14.211 6.25 17.5 13.567 8.5 29.793 12.625 45.625 15 26.195 3.929 52.889 4.025 79.375 3.75 33.8-.351 67.553-2.958 101.25-5.625 24.242-1.918 48.37-5.109 72.5-8.125 37.54-4.692 75.121-9.163 112.5-15 78.323-12.231 156.144-28.698 232.5-50 18.847-5.258 37.342-11.781 55.625-18.75 23.82-9.082 47.75-18.121 70.62-29.375 15.78-7.759 31.57-16.169 45-27.5 8.23-6.931 14.4-16.418 18.75-26.25 2.37-5.337 1.59-11.742.63-17.5-.55-3.314-2.65-6.347-5-8.75-6.51-6.66-13.12-13.58-21.25-18.125-16.69-9.335-34.41-16.94-52.5-23.125-22.86-7.813-46.22-14.504-70-18.75-28.877-5.157-58.231-7.424-87.5-9.375-20.788-1.386-41.713-2.036-62.5-.625-37.644 2.554-75.464 5.29-112.5 12.5-41.323 8.044-81.522 21.128-121.875 33.125-13.65 4.058-26.667 10-40 15"
      />
    </m.svg>
  )
}

export default Circle
