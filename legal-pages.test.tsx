import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Privacy from "./Privacy";
import Terms from "./Terms";

describe("legal pages", () => {
  it("renders the privacy controller, forms, rights, and NRW complaint authority", () => {
    const html = renderToStaticMarkup(<Privacy />);

    expect(html).toContain("Datenschutzerklärung");
    expect(html).toContain("VISION112 GmbH");
    expect(html).toContain("Bocholder Str. 278");
    expect(html).toContain("Karriereformular und Bewerbungen");
    expect(html).toContain("Bewertungsformular");
    expect(html).toContain("Ihre Datenschutzrechte");
    expect(html).toContain("LDI NRW");
    expect(html).toContain("keine Marketing-Cookies");
  });

  it("renders website-use rules and links back to the privacy page", () => {
    const html = renderToStaticMarkup(<Terms />);

    expect(html).toContain("Nutzungsbedingungen");
    expect(html).toContain("Karriereformular");
    expect(html).toContain("Bewertungen");
    expect(html).toContain("Haftung");
    expect(html).toContain("Anwendbares Recht und Gerichtsstand");
    expect(html).toContain('href="/datenschutz"');
  });
});
