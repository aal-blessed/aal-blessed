# Testing Procedures

## Overview

This document outlines testing procedures for the Project X edge deployment POC.

## Test Checklist

### 1. Deployment Verification

- [ ] Repository connected to deployment platform
- [ ] Auto-deploy triggers on push to main
- [ ] Build completes successfully
- [ ] Application accessible via provided URL

### 2. Frontend Tests

- [ ] Page loads correctly
- [ ] Styles render properly
- [ ] API test button functions
- [ ] Results display correctly

### 3. API Endpoint Tests

#### Health Check
```bash
curl https://YOUR_DOMAIN/api/health
```
Expected: `{"status":"ok","timestamp":"...","uptime":...}`

#### Time Endpoint
```bash
curl https://YOUR_DOMAIN/api/time
```
Expected: `{"time":"...","timezone":"...","region":"..."}`

#### Echo Endpoint
```bash
curl "https://YOUR_DOMAIN/api/echo?test=value"
```
Expected: `{"message":"Echo test","query":{"test":"value"},...}`

### 4. Performance Tests

- [ ] Initial page load < 3s
- [ ] API response time < 500ms
- [ ] No console errors

## Notes

- Replace YOUR_DOMAIN with actual deployment URL
- All tests should pass before considering POC successful
- Document any issues encountered
