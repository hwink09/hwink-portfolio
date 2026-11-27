"use client";

import { MonitorIcon, MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themeOptions = [
  { value: "light", Icon: SunIcon },
  { value: "dark", Icon: MoonIcon },
  { value: "system", Icon: MonitorIcon },
] as const;

type ThemeSwitcherLabels = { trigger: string } & Record<
  (typeof themeOptions)[number]["value"],
  string
>;

const defaultLabels: ThemeSwitcherLabels = {
  trigger: "Change color theme",
  light: "Light",
  dark: "Dark",
  system: "System",
};

export function ThemeSwitcher({
  labels = defaultLabels,
}: {
  labels?: ThemeSwitcherLabels;
}) {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label={labels.trigger}>
          <SunMoonIcon aria-hidden="true" data-icon="inline-start" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="motion-reduce:animate-none">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {themeOptions.map(({ value, Icon }) => (
            <DropdownMenuRadioItem key={value} value={value}>
              <Icon aria-hidden="true" />
              {labels[value]}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
