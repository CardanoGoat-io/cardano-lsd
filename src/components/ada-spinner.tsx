import React, { useEffect } from "react";
import { gsap } from "gsap";

interface SpinnerStartInfo {
	id: string,
	color: string,
	startDelay: number,
	durationBeforeRepeat: number
}

interface SpinnerInfo {
	id: string,
    classNames: Array<string>,
	color: string,
	startDelay: number,
	durationBeforeRepeat: number,
    addStyle?: Object
}

const adaAn = ({ id, color, startDelay, durationBeforeRepeat }: SpinnerStartInfo) => {
	const rings = [
		{ d: 396, r: 169, fill: color },
		{ d: 678, r: 100, fill: color },
		{ d: 880, r: 85, fill: color },
		{ d: 1084, r: 70, fill: color },
		{ d: 1195, r: 55, fill: color },
	]
	const container = document.getElementById(id)
	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
	svg.setAttribute('viewBox', '-1300 -1300 2600 2600')
	container?.appendChild(svg)

	const ns = svg.namespaceURI

	const mainTimeline = gsap.timeline({ repeat: -1, yoyo: false })
  rings.forEach((ringData, index) => {
    const ring = document.createElementNS(ns, 'g')
    ring.setAttribute('fill', ringData.fill)
    svg.appendChild(ring)

    const tl = gsap.timeline()
    tl.set(ring, { rotation: 30 * index, transformOrigin: 'center center' }, 0)
    for (let i = 0; i < 6; i++) {
      const isLastRing = index === rings.length - 1
      const circle = document.createElementNS(ns, 'circle')
      circle.setAttribute('r', ringData.r.toString())
      ring.appendChild(circle)
      tl.set(
        circle,
        {
          cx: ringData.d,
          transformOrigin: 'center center',
          rotation: i * 60,
        },
        0,
      )
      const offset = i * 0.01
      const nextCircle = rings[index + 1] || rings[0]
      tl.to(
        circle,
        {
          startDelay,
          durationBeforeRepeat,
          cx: isLastRing ? undefined : nextCircle.d,
          r: isLastRing ? undefined : nextCircle.r,
          rotation: `+=${30 * index + ((index + 1) % 2) * 30 + (isLastRing ? 150 : 0)}`,
          ease: 'back.inOut',
        },
        offset,
      )
      if (isLastRing) {
        tl.to(
          circle,
          {
            duration: durationBeforeRepeat * 0.2,
            r: '30',
            ease: 'power2.in',
          },
          offset + startDelay + durationBeforeRepeat * 0.2,
        )
        tl.to(
          circle,
          {
            duration: durationBeforeRepeat * 0.2,
            cx: 0,
            ease: 'power2.inout',
          },
          offset + startDelay + durationBeforeRepeat * 0.4,
        )
        tl.to(
          circle,
          {
            duration: durationBeforeRepeat * 0.3,
            r: nextCircle.r,
            cx: nextCircle.d,
            ease: 'power2.inout',
          },
          offset + startDelay + durationBeforeRepeat * 0.6,
        )
      }
    }
    mainTimeline.add(tl, 0)
  })
}

export const AdaSpinner = ({ id, classNames, color, startDelay, durationBeforeRepeat, addStyle = {display: "flex !important", width: "100% !important", height: "100% !important", margin: "5px !important", padding: "5px !important"} }: SpinnerInfo) => {
	useEffect(() => {
		adaAn({ id, color, startDelay, durationBeforeRepeat })
	},[]);
	return (
	<><div style={addStyle}>
				<div 
                    id={id} 
                    className={classNames.join(" ")}
                    style={{ display: "flex !important", width: "100% !important", height: "100% !important", margin: "0px !important", padding: "0px !important" }}>
				</div>
			<span className="">Loading...</span>
	</div></>
)
}
export default AdaSpinner
