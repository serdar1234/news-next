import { DUMMY_NEWS } from "@/dummy-news";
import { News, StrNum } from "./types";

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears(): number[] {
  return DUMMY_NEWS.reduce((years: number[], news: News) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: StrNum): number[] {
  return DUMMY_NEWS.reduce((months: number[], news: News) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year: StrNum): News[] {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === Number(year)
  );
}

export function getNewsForYearAndMonth(year: StrNum, month: StrNum): News[] {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === Number(year) && newsMonth === Number(month);
  });
}
