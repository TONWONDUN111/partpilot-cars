const DEFAULT_NETWORKS = [
  {
    id: "ebay",
    name: "eBay Partner Network",
    rate: 0.045,
    region: "Global",
    note: "Strong for used, remanufactured, and hard-to-find OEM parts.",
    signupUrl: "https://partnernetwork.ebay.com/",
    catalogUrl: "https://www.ebay.com/b/Auto-Parts-and-Accessories/6028/bn_569479",
    affiliateUrl: "",
    approval: "approved",
    status: "Approved",
  },
  {
    id: "rockauto",
    name: "RockAuto",
    rate: 0.04,
    region: "North America",
    note: "Deep catalog of OEM and aftermarket parts. Apply via their in-house program at rockauto.com/en/info/affiliates.",
    signupUrl: "https://www.rockauto.com/en/info/affiliates",
    catalogUrl: "https://www.rockauto.com/en/catalog/",
    affiliateUrl: "",
    approval: "not-applied",
    status: "Apply at RockAuto direct",
  },
  {
    id: "partsgeek",
    name: "PartsGeek (via CJ)",
    rate: 0.05,
    region: "US-focused",
    note: "Application submitted via Commission Junction. Pending review. Paste your CJ deep-link once approved.",
    signupUrl: "https://www.cj.com",
    catalogUrl: "https://www.partsgeek.com/",
    affiliateUrl: "",
    approval: "pending",
    status: "CJ pending",
  },
  {
    id: "autozone",
    name: "AutoZone / retail partner",
    rate: 0.025,
    region: "Retail + BOPIS",
    note: "Good for local pickup funnels and urgent repair buyers.",
    signupUrl: "https://www.autozone.com/",
    catalogUrl: "https://www.autozone.com/",
    affiliateUrl: "",
    approval: "pending",
    status: "Retail partner path",
  },
];

const PARTS = [
  {
    id: 1,
    name: "Front ceramic brake pad set",
    fitment: "2014–2018 Honda Accord 2.4L",
    category: "Brakes",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 42.99,
    featured: 1,
    link: "#",
    badge: "Fast mover",
  },
  {
    id: 2,
    name: "Drilled & slotted front rotors (pair)",
    fitment: "2016–2021 Toyota Tacoma",
    category: "Brakes",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 87.49,
    featured: 2,
    link: "#",
    badge: "Top rated",
  },
  {
    id: 3,
    name: "OEM-spec brake caliper – front left",
    fitment: "2012–2019 Ram 1500",
    category: "Brakes",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 74.0,
    featured: 3,
    link: "#",
    badge: "OEM match",
  },
  {
    id: 4,
    name: "OEM-style window regulator",
    fitment: "2011–2017 Toyota Camry – driver front",
    category: "Body",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 84.5,
    featured: 4,
    link: "#",
    badge: "Used + new",
  },
  {
    id: 5,
    name: "Power door mirror – passenger side",
    fitment: "2009–2014 Ford F-150",
    category: "Body",
    source: "PartsGeek",
    networkId: "partsgeek",
    price: 58.9,
    featured: 5,
    link: "#",
    badge: "Easy install",
  },
  {
    id: 6,
    name: "Exterior door handle set (4-door)",
    fitment: "2007–2013 Chevy Silverado",
    category: "Body",
    source: "PartsGeek",
    networkId: "partsgeek",
    price: 62.25,
    featured: 6,
    link: "#",
    badge: "Service upsell",
  },
  {
    id: 7,
    name: "Front bumper cover – primed",
    fitment: "2015–2020 Honda CR-V",
    category: "Body",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 129.0,
    featured: 7,
    link: "#",
    badge: "Collision repair",
  },
  {
    id: 8,
    name: "Alternator 130A remanufactured",
    fitment: "2012–2016 Ford Focus 2.0L",
    category: "Electrical",
    source: "RockAuto",
    networkId: "rockauto",
    price: 149.79,
    featured: 8,
    link: "#",
    badge: "Reman value",
  },
  {
    id: 9,
    name: "Starter motor remanufactured",
    fitment: "2008–2013 Chevy Malibu 2.4L",
    category: "Electrical",
    source: "RockAuto",
    networkId: "rockauto",
    price: 112.0,
    featured: 9,
    link: "#",
    badge: "Lifetime warranty",
  },
  {
    id: 10,
    name: "AGM battery group 48 – 760 CCA",
    fitment: "Most 2014+ sedans and crossovers",
    category: "Electrical",
    source: "AutoZone / retail partner",
    networkId: "autozone",
    price: 189.99,
    featured: 10,
    link: "#",
    badge: "Local pickup",
  },
  {
    id: 11,
    name: "MAF sensor – OEM grade",
    fitment: "2010–2017 Hyundai Sonata 2.4L",
    category: "Electrical",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 54.99,
    featured: 11,
    link: "#",
    badge: "DIY fix",
  },
  {
    id: 12,
    name: "O2 sensor – upstream",
    fitment: "2011–2018 Honda Civic 1.8L",
    category: "Electrical",
    source: "PartsGeek",
    networkId: "partsgeek",
    price: 39.5,
    featured: 12,
    link: "#",
    badge: "CEL fix",
  },
  {
    id: 13,
    name: "Rear shock absorber pair (KYB Excel-G)",
    fitment: "2015–2021 Nissan Altima",
    category: "Suspension",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 104.2,
    featured: 13,
    link: "#",
    badge: "Top brand",
  },
  {
    id: 14,
    name: "Front strut assembly complete",
    fitment: "2013–2020 Ford Fusion 2.0L",
    category: "Suspension",
    source: "RockAuto",
    networkId: "rockauto",
    price: 139.0,
    featured: 14,
    link: "#",
    badge: "Quick-strut",
  },
  {
    id: 15,
    name: "Sway bar end link kit",
    fitment: "2005–2015 Toyota Tacoma 4WD",
    category: "Suspension",
    source: "PartsGeek",
    networkId: "partsgeek",
    price: 28.75,
    featured: 15,
    link: "#",
    badge: "Clunk fix",
  },
  {
    id: 16,
    name: "Control arm with ball joint – front lower",
    fitment: "2006–2011 Honda Civic",
    category: "Suspension",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 66.0,
    featured: 16,
    link: "#",
    badge: "Alignment saver",
  },
  {
    id: 17,
    name: "LED projector headlight assembly (pair)",
    fitment: "2016–2022 Jeep Grand Cherokee",
    category: "Lighting",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 214.0,
    featured: 17,
    link: "#",
    badge: "Premium ticket",
  },
  {
    id: 18,
    name: "LED tail light assembly – driver side",
    fitment: "2015–2020 Chevy Colorado",
    category: "Lighting",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 97.0,
    featured: 18,
    link: "#",
    badge: "Drop-in fit",
  },
  {
    id: 19,
    name: "Fog light kit with wiring harness",
    fitment: "2017–2022 Toyota Camry",
    category: "Lighting",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 45.5,
    featured: 19,
    link: "#",
    badge: "Bundle deal",
  },
  {
    id: 20,
    name: "Iridium spark plug set (4-pack)",
    fitment: "2010–2018 Hyundai Elantra 1.8L",
    category: "Ignition",
    source: "RockAuto",
    networkId: "rockauto",
    price: 38.4,
    featured: 20,
    link: "#",
    badge: "100k mile",
  },
  {
    id: 21,
    name: "Ignition coil pack set (6-pack)",
    fitment: "2008–2014 Dodge Charger 3.6L",
    category: "Ignition",
    source: "PartsGeek",
    networkId: "partsgeek",
    price: 74.95,
    featured: 21,
    link: "#",
    badge: "Misfire fix",
  },
  {
    id: 22,
    name: "Engine air filter",
    fitment: "2014–2020 Ford F-150 2.7L EcoBoost",
    category: "Maintenance",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 18.99,
    featured: 22,
    link: "#",
    badge: "Monthly seller",
  },
  {
    id: 23,
    name: "Cabin air filter",
    fitment: "2013–2020 Honda Accord",
    category: "Maintenance",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 14.49,
    featured: 23,
    link: "#",
    badge: "High volume",
  },
  {
    id: 24,
    name: "Oil filter premium pack (5-pack)",
    fitment: "Toyota, Honda, Subaru – most 4-cyl",
    category: "Maintenance",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 22.99,
    featured: 24,
    link: "#",
    badge: "Bulk value",
  },
  {
    id: 25,
    name: "Timing belt + water pump kit",
    fitment: "2002–2011 Honda CR-V 2.4L",
    category: "Maintenance",
    source: "RockAuto",
    networkId: "rockauto",
    price: 187.5,
    featured: 25,
    link: "#",
    badge: "High ticket",
  },
  {
    id: 26,
    name: "AC compressor with clutch",
    fitment: "2010–2015 Chevy Cruze 1.8L",
    category: "HVAC",
    source: "RockAuto",
    networkId: "rockauto",
    price: 229.0,
    featured: 26,
    link: "#",
    badge: "Summer demand",
  },
  {
    id: 27,
    name: "Heater core replacement",
    fitment: "2004–2012 GMC Canyon / Colorado",
    category: "HVAC",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 98.0,
    featured: 27,
    link: "#",
    badge: "Winter repair",
  },
  {
    id: 28,
    name: "Radiator OEM-spec replacement",
    fitment: "2005–2012 Toyota Avalon 3.5L",
    category: "Cooling",
    source: "PartsGeek",
    networkId: "partsgeek",
    price: 133.0,
    featured: 28,
    link: "#",
    badge: "Overheating fix",
  },
  {
    id: 29,
    name: "Catalytic converter – direct-fit",
    fitment: "2009–2014 Toyota Camry 2.5L",
    category: "Exhaust",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 318.0,
    featured: 29,
    link: "#",
    badge: "High payout",
  },
  {
    id: 30,
    name: "Performance cold air intake kit",
    fitment: "2015–2021 Subaru WRX 2.0L",
    category: "Performance",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 249.99,
    featured: 30,
    link: "#",
    badge: "Enthusiast",
  },
];

const NETWORKS_KEY = "partpilot-networks";
const REQUESTS_KEY = "partpilot-repair-requests";
const ADMIN_MODE_KEY = "partpilot-admin-open";

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function loadNetworks() {
  const saved = localStorage.getItem(NETWORKS_KEY);
  if (!saved) {
    return DEFAULT_NETWORKS;
  }

  try {
    const parsed = JSON.parse(saved);
    return DEFAULT_NETWORKS.map((network) => {
      const match = parsed.find((item) => item.id === network.id);
      return match ? { ...network, ...match } : network;
    });
  } catch {
    return DEFAULT_NETWORKS;
  }
}

function saveNetworks(networks) {
  localStorage.setItem(NETWORKS_KEY, JSON.stringify(networks));
}

function loadRequests() {
  const saved = localStorage.getItem(REQUESTS_KEY);
  if (!saved) {
    return [];
  }

  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
}

function saveRequests(requests) {
  localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
}

function adminModeEnabled() {
  return sessionStorage.getItem(ADMIN_MODE_KEY) === "true";
}

function setAdminMode(value) {
  sessionStorage.setItem(ADMIN_MODE_KEY, value ? "true" : "false");
}

function getNetworkMap(networks) {
  return Object.fromEntries(networks.map((network) => [network.id, network]));
}

function approvalLabel(value) {
  if (value === "approved") {
    return "Approved";
  }
  if (value === "pending") {
    return "Pending";
  }
  return "Not applied";
}

function statusClass(value) {
  if (value === "approved") {
    return "status-approved";
  }
  if (value === "pending") {
    return "status-pending";
  }
  return "status-not-applied";
}

function destinationUrl(part, networkMap) {
  const network = networkMap[part.networkId];
  if (!network) {
    return "#";
  }
  if (part.link && part.link !== "#") {
    return part.link;
  }

  const query = encodeURIComponent(`${part.name} ${part.fitment}`);

  if (network.affiliateUrl) {
    if (network.affiliateUrl.includes("{query}")) {
      return network.affiliateUrl.replace("{query}", query);
    }
    return network.affiliateUrl;
  }

  if (part.networkId === "ebay") {
    return `https://www.ebay.com/sch/i.html?_nkw=${query}`;
  }
  if (part.networkId === "partsgeek") {
    return `https://www.partsgeek.com/catalog/?q=${query}`;
  }
  if (part.networkId === "rockauto") {
    return `https://www.rockauto.com/en/catalog/`;
  }

  return network.catalogUrl || network.signupUrl || "#";
}

function ctaLabel(part, networkMap) {
  const network = networkMap[part.networkId];
  if (!network) {
    return "Open link";
  }
  if (network.approval === "approved" && network.affiliateUrl) {
    return "Buy through affiliate link";
  }
  if (network.approval === "approved") {
    return "View matching part";
  }
  if (network.signupUrl) {
    return "Apply now";
  }
  return "Open source catalog";
}

function estimatedPayout(part, networkMap) {
  const rate = networkMap[part.networkId]?.rate || 0;
  return part.price * rate;
}

function buildSelectOptions(select, values, allLabel) {
  select.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = allLabel;
  select.appendChild(allOption);

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function renderNetworkEditor(networks, rerender) {
  const container = document.querySelector("#network-editor");
  if (!container) {
    return;
  }

  container.innerHTML = "";
  networks.forEach((network) => {
    const row = document.createElement("div");
    row.className = "network-row";
    row.innerHTML = `
      <div>
        <strong>${network.name}</strong>
        <p>${network.note}</p>
        <div class="network-row-actions">
          <a class="button button-tertiary" href="${network.signupUrl}" target="_blank" rel="noreferrer">Official signup</a>
          <a class="button button-secondary" href="${network.catalogUrl}" target="_blank" rel="noreferrer">Catalog</a>
        </div>
      </div>
      <div class="network-fields">
        <label>
          Rate %
          <input type="number" min="0" max="100" step="0.1" value="${(network.rate * 100).toFixed(1)}" data-network-rate="${network.id}">
        </label>
        <label>
          Approval status
          <select data-network-approval="${network.id}">
            <option value="not-applied" ${network.approval === "not-applied" ? "selected" : ""}>Not applied</option>
            <option value="pending" ${network.approval === "pending" ? "selected" : ""}>Pending</option>
            <option value="approved" ${network.approval === "approved" ? "selected" : ""}>Approved</option>
          </select>
        </label>
        <label>
          Affiliate or destination URL
          <input class="network-link-input" type="url" placeholder="Paste approved affiliate link or storefront URL" value="${network.affiliateUrl || ""}" data-network-affiliate="${network.id}">
        </label>
      </div>
    `;
    container.appendChild(row);
  });

  container.querySelectorAll("[data-network-rate]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const target = event.currentTarget;
      const network = networks.find((item) => item.id === target.dataset.networkRate);
      const nextRate = Number(target.value) / 100;
      if (!network || Number.isNaN(nextRate)) {
        return;
      }
      network.rate = Math.max(0, nextRate);
      saveNetworks(networks);
      rerender();
    });
  });

  container.querySelectorAll("[data-network-approval]").forEach((select) => {
    select.addEventListener("change", (event) => {
      const target = event.currentTarget;
      const network = networks.find((item) => item.id === target.dataset.networkApproval);
      if (!network) {
        return;
      }
      network.approval = target.value;
      network.status = approvalLabel(target.value);
      saveNetworks(networks);
      rerender();
    });
  });

  container.querySelectorAll("[data-network-affiliate]").forEach((input) => {
    input.addEventListener("change", (event) => {
      const target = event.currentTarget;
      const network = networks.find((item) => item.id === target.dataset.networkAffiliate);
      if (!network) {
        return;
      }
      network.affiliateUrl = target.value.trim();
      saveNetworks(networks);
      rerender();
    });
  });
}

function renderNetworkCards(networks) {
  const container = document.querySelector("#network-cards");
  if (!container) {
    return;
  }

  container.innerHTML = networks.map((network) => `
    <article class="network-card">
      <span class="pill">${network.region}</span>
      <h3>${network.name}</h3>
      <p>${network.note}</p>
      <div class="meta-row">
        <span class="meta-chip">Rate ${(network.rate * 100).toFixed(1)}%</span>
        <span class="meta-chip ${statusClass(network.approval)}">${network.status}</span>
      </div>
      <div class="meta-row">
        <a class="text-link" href="${network.signupUrl}" target="_blank" rel="noreferrer">Signup</a>
        <a class="text-link" href="${network.catalogUrl}" target="_blank" rel="noreferrer">Catalog</a>
      </div>
    </article>
  `).join("");
}

function renderApprovalSummary(networks) {
  const container = document.querySelector("#approval-summary");
  if (!container) {
    return;
  }

  const approved = networks.filter((network) => network.approval === "approved");
  const pending = networks.filter((network) => network.approval === "pending");
  const ready = networks.filter((network) => network.approval === "approved" && network.affiliateUrl);

  container.innerHTML = `
    <div class="summary-card">
      <span class="stat-label">Approved now</span>
      <strong>${approved.length}</strong>
    </div>
    <div class="summary-card">
      <span class="stat-label">Pending approval</span>
      <strong>${pending.length}</strong>
    </div>
    <div class="summary-card">
      <span class="stat-label">Buttons ready to sell</span>
      <strong>${ready.length}</strong>
    </div>
  `;
}

function renderAdminVisibility() {
  const toggleButton = document.querySelector("#admin-toggle");
  const adminSections = document.querySelectorAll(".admin-only");
  const isOpen = adminModeEnabled();

  adminSections.forEach((section) => {
    section.hidden = !isOpen;
  });

  if (toggleButton) {
    toggleButton.textContent = isOpen ? "Hide private affiliate panel" : "Open private affiliate panel";
    toggleButton.className = isOpen ? "button button-danger" : "button button-secondary";
  }
}

function setupAdminMode() {
  const toggleButton = document.querySelector("#admin-toggle");
  if (!toggleButton) {
    return;
  }

  toggleButton.addEventListener("click", () => {
    setAdminMode(!adminModeEnabled());
    renderAdminVisibility();
  });

  renderAdminVisibility();
}

function renderStats(parts, networks, requests, networkMap) {
  const listingCount = document.querySelector("#listing-count");
  const networkCount = document.querySelector("#network-count");
  const topPayout = document.querySelector("#top-payout");
  const approvedCount = document.querySelector("#approved-count");

  if (!listingCount) {
    return;
  }

  const payouts = parts.map((part) => estimatedPayout(part, networkMap));
  listingCount.textContent = String(parts.length);
  networkCount.textContent = String(networks.length);
  topPayout.textContent = payouts.length ? currency(Math.max(...payouts)) : currency(0);
  approvedCount.textContent = String(networks.filter((network) => network.approval === "approved").length);
}

async function renderCarContentFeed() {
  const container = document.querySelector("#car-content-feed");
  if (!container) {
    return;
  }

  try {
    const response = await fetch("content_feed.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("feed unavailable");
    }
    const items = await response.json();
    if (!Array.isArray(items) || !items.length) {
      container.innerHTML = '<div class="empty-state">No guides published yet.</div>';
      return;
    }

    container.innerHTML = items.slice(0, 6).map((item) => `
      <article class="part-card">
        <header>
          <div>
            <span class="pill">Guide</span>
            <h3>${item.title}</h3>
          </div>
          <span class="meta-chip">${item.published}</span>
        </header>
        <p>${item.summary || "Auto-published buying guide."}</p>
        <a class="button button-secondary" href="${item.url}">Read guide</a>
      </article>
    `).join("");
  } catch {
    container.innerHTML = '<div class="empty-state">Guide feed unavailable.</div>';
  }
}

function renderParts(networks) {
  const container = document.querySelector("#parts-grid");
  const vehicleFilter = document.querySelector("#vehicle-filter");
  const partFilter = document.querySelector("#part-filter");
  const sourceFilter = document.querySelector("#source-filter");
  const sortFilter = document.querySelector("#sort-filter");
  if (!container || !vehicleFilter || !partFilter || !sourceFilter || !sortFilter) {
    return;
  }

  const networkMap = getNetworkMap(networks);
  const vehicleValue = vehicleFilter.value;
  const partValue = partFilter.value;
  const sourceValue = sourceFilter.value;
  const sortValue = sortFilter.value;

  let filtered = PARTS.filter((part) => {
    const matchesVehicle = vehicleValue === "all" || part.fitment === vehicleValue;
    const matchesPart = partValue === "all" || part.category === partValue;
    const matchesSource = sourceValue === "all" || part.source === sourceValue;
    return matchesVehicle && matchesPart && matchesSource;
  });

  filtered = filtered.sort((left, right) => {
    if (sortValue === "price-asc") {
      return left.price - right.price;
    }
    if (sortValue === "price-desc") {
      return right.price - left.price;
    }
    if (sortValue === "payout-desc") {
      return estimatedPayout(right, networkMap) - estimatedPayout(left, networkMap);
    }
    return left.featured - right.featured;
  });

  if (!filtered.length) {
    container.innerHTML = '<div class="empty-state">No parts match this filter yet.</div>';
    return;
  }

  container.innerHTML = filtered.map((part) => `
    <article class="part-card">
      <header>
        <div>
          <span class="pill">${part.badge}</span>
          <h3>${part.name}</h3>
        </div>
        <span class="meta-chip">${part.category}</span>
      </header>
      <p>${part.fitment}</p>
      <div class="price-row">
        <span class="price-chip">Price ${currency(part.price)}</span>
        <span class="price-chip">Est. payout ${currency(estimatedPayout(part, networkMap))}</span>
      </div>
      <div class="meta-row">
        <a class="meta-chip text-link" href="${destinationUrl(part, networkMap)}" target="${destinationUrl(part, networkMap) === "#" ? "_self" : "_blank"}" rel="noreferrer">Retailer: ${networkMap[part.networkId]?.name || part.source}</a>
        <span class="meta-chip">Rate ${((networkMap[part.networkId]?.rate || 0) * 100).toFixed(1)}%</span>
      </div>
      <a class="button button-primary" href="${destinationUrl(part, networkMap)}" target="_blank" rel="noreferrer">${ctaLabel(part, networkMap)}</a>
    </article>
  `).join("");
}

function setupMarketPage() {
  const vehicleFilter = document.querySelector("#vehicle-filter");
  const partFilter = document.querySelector("#part-filter");
  const sourceFilter = document.querySelector("#source-filter");
  const sortFilter = document.querySelector("#sort-filter");
  if (!vehicleFilter || !partFilter || !sourceFilter || !sortFilter) {
    return;
  }

  let networks = loadNetworks();
  const requests = loadRequests();

  buildSelectOptions(vehicleFilter, [...new Set(PARTS.map((part) => part.fitment))], "All vehicles");
  buildSelectOptions(partFilter, [...new Set(PARTS.map((part) => part.category))], "All part types");
  buildSelectOptions(sourceFilter, [...new Set(PARTS.map((part) => part.source))], "All sources");

  const rerender = () => {
    networks = loadNetworks();
    const networkMap = getNetworkMap(networks);
    renderNetworkEditor(networks, rerender);
    renderNetworkCards(networks);
    renderApprovalSummary(networks);
    renderParts(networks);
    renderStats(PARTS, networks, requests, networkMap);
  };

  [vehicleFilter, partFilter, sourceFilter, sortFilter].forEach((element) => {
    element.addEventListener("input", rerender);
    element.addEventListener("change", rerender);
  });

  rerender();
}

function renderRepairRequests() {
  const container = document.querySelector("#repair-requests");
  if (!container) {
    return;
  }

  const requests = loadRequests();
  if (!requests.length) {
    container.innerHTML = '<div class="empty-state">No repair requests saved yet.</div>';
    return;
  }

  container.innerHTML = requests.slice().reverse().map((request) => `
    <article class="request-card">
      <header>
        <div>
          <span class="pill">${request.part}</span>
          <h3>${request.year || ""} ${request.make || ""} ${request.model || ""}</h3>
        </div>
        <span class="meta-chip">${request.location || "Global"}</span>
      </header>
      <p><strong>Contact:</strong> ${request.name} · ${request.contact}</p>
      <p><strong>Symptom:</strong> ${request.symptom}</p>
      <ul>
        <li><strong>Budget:</strong> ${request.budget || "Not provided"}</li>
        <li><strong>Extra detail:</strong> ${request.details || "None"}</li>
      </ul>
    </article>
  `).join("");
}

function setupRepairPage() {
  const form = document.querySelector("#repair-form");
  const clearButton = document.querySelector("#clear-requests");
  if (!form || !clearButton) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const nextRequest = Object.fromEntries(formData.entries());
    const requests = loadRequests();
    requests.push(nextRequest);
    saveRequests(requests);
    form.reset();
    renderRepairRequests();
  });

  clearButton.addEventListener("click", () => {
    localStorage.removeItem(REQUESTS_KEY);
    renderRepairRequests();
  });

  renderRepairRequests();
}

function init() {
  setupAdminMode();
  setupMarketPage();
  setupRepairPage();
  renderCarContentFeed();
}

init();