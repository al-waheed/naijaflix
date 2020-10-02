import React from 'react'
import About from './About'
import Hollywood from './Hollywood';
import Nollywood from './Nollywood'

function Components() {
    return (
    <div>
    <About/>
      <Hollywood heading="Watch on TV." pics="/image/advet1.jpg" title="HOMEFRONT"/>
      <Hollywood  heading="Download for free." pics="/image/advet2.jpg" title="BATMAN"/>
      <Hollywood  heading="For Every home." pics="/image/advet3.jpg" title="BATTLEFIELD2"/>
      <Hollywood  heading="Download for free." pics="/image/advet4.jpg" title="ASSASSINCREED"/>

      <Nollywood heading="Watch on TV." pics="/image/images-1.jpeg" title="WAIT FOR ME"/>
      <Nollywood  heading="Download for free." pics="/image/images-2.jpeg" title="MERCY THE ILLITRATE"/>
      <Nollywood  heading="For Every home." pics="/image/images-5.jpeg" title="WHEN LOVE IS NOT ENOUGH"/>
      <Nollywood  heading="Download for free." pics="/image/images-6.jpeg" title="LOVE SHY"/>
  </div>
    )
}

export default Components
