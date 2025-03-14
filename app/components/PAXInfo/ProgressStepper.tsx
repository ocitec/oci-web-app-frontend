'use client';

import { CheckIcon } from '@heroicons/react/24/solid';

interface Step {
  id: number;
  name: string;
  status: 'complete' | 'current' | 'upcoming';
}

interface ProgressStepperProps {
  currentStep: number;
}

/**
 * ProgressStepper Component
 * 
 * A visual stepper component showing the booking flow progress.
 * Maintains consistent styling with the app's theme.
 * 
 * Features:
 * - Visual indication of completed, current, and upcoming steps
 * - Yellow accent color for active steps (#FDB813)
 * - Light background with proper contrast
 * - Responsive design with proper spacing
 */
const ProgressStepper = ({ currentStep }: ProgressStepperProps) => {
  const steps: Step[] = [
    {
      id: 1,
      name: 'Flight Details',
      status: currentStep > 1 ? 'complete' : currentStep === 1 ? 'current' : 'upcoming',
    },
    {
      id: 2,
      name: 'Passenger Information',
      status: currentStep > 2 ? 'complete' : currentStep === 2 ? 'current' : 'upcoming',
    },
    {
      id: 3,
      name: 'Payment',
      status: currentStep > 3 ? 'complete' : currentStep === 3 ? 'current' : 'upcoming',
    },
    {
      id: 4,
      name: 'Confirmation',
      status: currentStep > 4 ? 'complete' : currentStep === 4 ? 'current' : 'upcoming',
    },
  ];

  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center justify-between w-full">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={`relative ${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
            <div className="group relative flex items-center">
              <span className="flex h-9 items-center" aria-hidden="true">
                <span
                  className={`
                    relative z-10 flex h-8 w-8 items-center justify-center rounded-full
                    ${step.status === 'complete' ? 'bg-gradient-to-r from-[#9c6f03] to-[#e5a711]' :
                      step.status === 'current' ? 'border-2 border-[#FDB813] bg-white' :
                      'border border-gray-300 bg-white'}
                  `}
                >
                  {step.status === 'complete' ? (
                    <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                  ) : (
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        step.status === 'current' ? 'bg-[#FDB813]' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </span>
                {stepIdx !== steps.length - 1 && (
                  <span
                    className={`absolute top-4 h-0.5 w-full ${
                      step.status === 'complete' ? 'bg-[#FDB813]' : 'bg-gray-300'
                    }`}
                  />
                )}
              </span>
              <span className="absolute top-10 text-center w-max -left-1/2">
                <span
                  className={`text-sm font-medium ${
                    step.status === 'complete' || step.status === 'current'
                      ? 'text-gray-900'
                      : 'text-gray-500'
                  }`}
                >
                  {step.name}
                </span>
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ProgressStepper;