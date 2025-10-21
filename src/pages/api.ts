// api.ts

export interface Processor {
  name: string;
  architecture: string;
  cores: number;
}

export interface Videocard {
  name: string;
  architecture: string;
  VRAM: number;
}

export interface PSU {
  name: string;
  powerInWatt: number;
}

const BASE_URL = "http://127.0.0.1:5000";

export async function getProcessors(): Promise<Processor[]> {
  const res = await fetch(`${BASE_URL}/processors`);
  if (!res.ok) throw new Error("Ошибка загрузки процессоров");
  return res.json();
}

export async function getVideocards(): Promise<Videocard[]> {
  const res = await fetch(`${BASE_URL}/videocards`);
  if (!res.ok) throw new Error("Ошибка загрузки видеокарт");
  return res.json();
}

export async function getPSUs(): Promise<PSU[]> {
  const res = await fetch(`${BASE_URL}/psus`);
  if (!res.ok) throw new Error("Ошибка загрузки блоков питания");
  return res.json();
}
