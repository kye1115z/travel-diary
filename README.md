# ✈️ Travel Diary (여행 기록 앱)

React를 사용하여 방문했던 여행지를 기록하고 관리하는 웹 애플리케이션입니다.  
여행지 추가, 수정, 삭제 기능과 함께 localStorage를 활용한 데이터 저장 기능을 제공합니다.

---

## 📌 프로젝트 개요

- **프로젝트명**: Travel Diary
- **목표**: 여행지를 기록하고 관리할 수 있는 CRUD 웹 애플리케이션 구현
- **개발 형태**: 팀 프로젝트 (React 실습)

---

## 👥 팀원

- 강상민
- 김예은
- 김태형
- 한진우

---

## 🛠 기술 스택

- **Frontend**: React (Vite)
- **Language**: JavaScript (ES6+)
- **Styling**: CSS
- **State Management**: useState, useEffect
- **Storage**: localStorage
- **Version Control**: Git, GitHub

---

## 🎯 주요 기능

### 1. 여행지 관리 (CRUD)

- 여행지 추가
- 여행지 수정
- 여행지 삭제
- 여행지 목록 렌더링

### 2. 상태 관리

- `useState`를 이용한 여행 데이터 관리
- 수정 모드 상태 관리

### 3. 데이터 저장

- `localStorage`를 사용하여 새로고침 후에도 데이터 유지

### 4. UI 구성

- Header: 앱 제목 및 통계 정보 (총 여행지 수, 방문 국가 수)
- TravelForm: 여행지 추가 / 수정 폼
- TravelList & TravelCard: 여행지 카드 리스트 표시

---

## 📂 프로젝트 구조

```text
src/
 ├── components/
 │   ├── Header.jsx
 │   ├── Header.css
 │   ├── TravelForm.jsx
 │   ├── TravelForm.css
 │   ├── TravelList.jsx
 │   ├── TravelList.css
 │   └── TravelCard.jsx
 ├── App.jsx
 ├── App.css
 └── index.css
```
