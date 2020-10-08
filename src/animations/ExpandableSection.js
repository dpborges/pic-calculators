import React from 'react';
import { Transition } from 'react-transition-group';
 
// This animation provides effect that content is expanding down on enter 
// and retracting up on exit.
export default function ExpandableSection({trigger, children}) {
  // console.log("trigger: ", trigger)

  return (
    <Transition in={!trigger} timeout={DURATION} >
      {status => {
        {/* console.log(status) */}
        return (
          <div style={{ 
                ...defaultStyle,
                ...transitionStyles[status],
                margin: 0, padding: 0
            }}>
            {children}
          </div>
        )}
      }
    </Transition>       
  )
}

const DURATION = 325

const defaultStyle = {
  transition: `all ${DURATION}ms ease-in-out`,
  height: '0rem',
  opacity: 0,
  zIndex: -1
}

const transitionStyles = {
  entering: { transform: 'translateY(0px)', height: '40rem', opacity: 1  },
  entered:  { transform: 'translateY(0px)',  height: '40rem', opacity: 1  },
  exiting:  { transform: 'translateY(-30px)' },
  exited: { transform: 'translateY(-30px)',  height: '0rem', opacity: 0   }
}
