# Design Doc: Hackathon Matcher & Locator

**Date:** 2026-05-06
**Status:** Approved
**Topic:** Hackathon Team Matching and Event Locator

## 1. Executive Summary
A web application designed to help individuals find teammates for hackathons through a skill-based matching engine. It also serves as a central hub for discovering hackathon events by aggregating data from external sources and allowing community submissions.

## 2. Architecture
*   **Platform:** Next.js (TypeScript) deployed on **Vercel**.
*   **Database:** **Vercel Postgres** for relational data (Users, Teams, Events, Skills).
*   **API:** Next.js Serverless Functions for backend logic.
*   **Task Scheduling:** Vercel Cron Jobs for the event discovery scraper.

## 3. Core Features

### 3.1 Unified User Profiles
*   Users maintain a single profile highlighting **Hard Skills** (e.g., React, Go, Figma) and **Interests** (e.g., AI, FinTech).
*   Status-driven visibility: Users can be "Browsing" (general) or "Committed" to a specific event.

### 3.2 Skill-Based Team Matching
*   **Matching Engine:** Recommends teammates based on skill complementarity (e.g., suggesting a Backend dev to a Frontend dev).
*   **Request/Accept Flow:** Connection requires a match request and acceptance.
*   **Team-First Logic:** Matches result in the creation of or joining a **Group Chat**. The engine analyzes the *entire team's* skill gaps to recommend the next member.

### 3.3 Event Locator & Discovery
*   **Aggregator:** Automated scrapers for **Luma, LinkedIn, and Facebook**.
*   **Community Submissions:** Form for users/organizers to submit events.
*   **Approval Workflow:** A dedicated Admin Dashboard for developers to review, edit, and approve scraped or submitted events before they appear publicly.
*   **Event Hubs:** Specific pages for events that filter the matching pool to only show participants of that event.

## 4. Data Model Highlights
*   **Users:** ID, Name, Profile Info, Skills[], Interests[].
*   **Teams:** ID, Name, MemberIDs[], EventID (optional).
*   **Events:** ID, Source (Luma/LinkedIn/Manual), Status (Pending/Approved), Metadata.
*   **MatchRequests:** SenderID, ReceiverID/TeamID, Status (Pending/Accepted/Rejected).

## 5. Success Criteria
*   Seamless transition from finding an event to finding a team.
*   Automated discovery pipeline reducing manual data entry.
*   Group-based communication established immediately upon matching.
