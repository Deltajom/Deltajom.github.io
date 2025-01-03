import React from 'react';

const FeaturedProjects = () => {
  return (
    <div>
      <h1>Featured Projects</h1>
      <ul>
        <li>
          <strong>Wrist Mounted Hypoglycemia Alert Wristband (ShiverRing)</strong><br />
          A wearable device using an M4 microcontroller, accelerometer, and BLE module to detect hand tremor frequencies, alerting nearby family members or emergency services.
        </li>
        <li>
          <strong>Dual Tone Audio Device Using PWM</strong><br />
          A breadboard-mounted Atmel 328p combined with a voltage adder op-amp circuit to create dual-tone sounds through headphones using PWM signals.
        </li>
        <li>
          <strong>Unity & Unreal AR/VR App Development</strong><br />
          Developed 5+ applications for Microsoft HoloLens 2, including one leveraging research mode to access IMU and depth camera data, and VR apps using OpenXR SDK for compatibility with multiple VR headsets.
        </li>
        <li>
          <strong>Google Forms Spreadsheet Automation</strong><br />
          Automated a reporting process for research using Google Scripts, enabling efficient management of linked spreadsheets.
        </li>
      </ul>
    </div>
  );
};

export default FeaturedProjects;
