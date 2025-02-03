# 🚆 NYC Transit Hub

**Providing real-time transit updates and routing by integrating the GTFS format MTA API and WebSockets.**

## 📌 Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)

---

## 🎯 Introduction

NYC Transit Hub is a **real-time transit tracking and route planning application** designed for New York City's subway system. By integrating the **GTFS format MTA API** with **WebSockets**, it provides **live vehicle positions, service alerts, and optimized routing** using graph-based shortest path algorithms.

This project aims to **enhance user experience** by offering seamless, real-time transit information to **commuters, developers, and transit agencies**.

---

## ✨ Features

✅ **Real-time subway updates**: Get live information about train arrivals, delays, and vehicle positions.  
✅ **Route planning & shortest path**: Find the fastest routes using **Dijkstra’s Algorithm** and **GTFS data**.  
✅ **Interactive transit maps**: Visualize routes and stops dynamically using **PostGIS** and **React.js**.  
✅ **User authentication**: Secure authentication using **Firebase Email Link Authentication**.  
✅ **RESTful API**: Structured **REST API** for accessing static and real-time transit data.  

---

## 🛠️ Tech Stack

**Frontend:**  
🔹 React.js  
🔹 HTML/CSS  
🔹 Figma (for UI/UX design)  

**Backend:**  
🔹 Node.js  
🔹 Express.js  
🔹 Firebase Authentication  
🔹 WebSockets  

**Database & APIs:**  
🔹 PostgreSQL + PostGIS  
🔹 GTFS (General Transit Feed Specification)  
🔹 MTA API  

---


Geospatial Data with PostgreSQL & PostGIS
	•	Stores GTFS static data (routes, stops, schedules).
	•	Handles real-time data (delays, vehicle positions, alerts).

Data Integrity & Challenges
	•	Ensuring Schema Consistency: Data from different transit agencies must match schema.
	•	Batch Insertion Handling: Managing large data imports without breaking integrity.
	•	Error Handling: Handling parsing errors for incorrect GTFS feeds.
 

Google Slide
https://docs.google.com/presentation/d/1H1r_nS3HTD6_p-cb1nGoRbBfbKI0CUaJpWAK6QD1flw/edit?usp=sharing

https://docs.google.com/presentation/d/1H1r_nS3HTD6_p-cb1nGoRbBfbKI0CUaJpWAK6QD1flw/edit?usp=sharing
