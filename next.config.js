/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

/** @type {import("next").NextConfig} */
const config = {
  async redirects() {
    return [
      { source: "/projects/sft-telemetry", destination: "/projects/sapienza-foiling-team", permanent: true },
      { source: "/projects/hiresight", destination: "/projects/edgeworks#hiresight", permanent: true },
      { source: "/projects/timesheet", destination: "/projects/edgeworks#timesheet", permanent: true },
    ];
  },
};

export default config;
