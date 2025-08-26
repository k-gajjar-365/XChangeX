# 💱 XChangeX - Currency Converter App

A fast, responsive currency converter built using **React**, **Vite**, and **Tailwind CSS** — designed to deliver real-time exchange rates with a clean, intuitive interface.

This project is a step forward after my Password Generator — my **second React app**, built to explore currency conversion with a clean UI and real-time data.




## 🧠 Hooks Used & Learned

This project helped me deepen my understanding of React hooks:

- `useState` – for managing input and selected currency states  

- `useEffect` – to fetch updated exchange rates when currencies change  

- `useId` – for generating unique IDs for form accessibility  

- `useCurrencyInfo.js` – a **custom hook** located in the `hooks/` folder  
  → Fetches currency data from [fawazahmed0/exchange-api](https://github.com/fawazahmed0/exchange-api)

---

## 🔐 Environment Variables

To keep the API configuration secure and flexible, I used **environment variables**:

Create a `.env` file in the root directory:

```env
VITE_API=https://api.example.com
```