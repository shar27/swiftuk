import React from 'react'
import styled from 'styled-components';

function OtherAreas() {
  return (
    <div>
         <h2 style={{ color: "black", fontSize: "32px", textAlign: "center" }}>
        Other Areas:
      </h2>
        <LocationsWrapper>
        <a href="https://www.propertymaintenanceleicester.com/">Leicester Property Maintenance </a>
        <a href="https://www.cardiffpropertymaintenance.co.uk/">Cardiff Property Maintenance</a>
        <a href="https://propertymaintenancemanchester.co.uk/">Manchester Property Maintenance </a>
        <a href="https://www.bristolpropertymaintenance.co.uk/">Bristol Property Maintenance</a>
        <a href="https://www.liverpoolpropertymaintenance.com/">Liverpool Property Maintenance</a>
        <a href="https://www.readingpropertymaintenance.co.uk/">Reading Property Maintenance</a>
        <a href="https://www.lancasterlandscaping.co.uk/">Lancaster Landscaping</a>

        </LocationsWrapper>
        
    </div>
  )
}

export default OtherAreas;

const LocationsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin-top: -12px;
  padding: 1.25rem;
  height: auto;
  font-size: 21px;
  font-weight: bold;
  color: white;
 

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;