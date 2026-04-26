#!/usr/bin/env bash
# Switch this repo's GitHub Pages from "Deploy from a branch" (raw repo files)
# to "GitHub Actions" so your Vite build in dist/ is what gets published.
#
# Prerequisites:
#   - A PAT with repo scope (classic) OR fine-grained token with:
#     Repository permissions → Administration: Read and write
#   - Export it before running:
#       export GITHUB_TOKEN=ghp_xxxxxxxx
#     or
#       export GH_TOKEN=ghp_xxxxxxxx
#
# Docs: https://docs.github.com/en/rest/pages/pages#update-information-about-a-github-pages-site

set -euo pipefail
OWNER="anudeepthota"
REPO="anudeepthota.github.io"
TOKEN="${GITHUB_TOKEN:-${GH_TOKEN:-}}"

if [[ -z "$TOKEN" ]]; then
  echo "Error: set GITHUB_TOKEN (or GH_TOKEN) to a token with repo admin / Pages settings access." >&2
  exit 1
fi

echo "Updating Pages build_type to workflow for ${OWNER}/${REPO} ..."
code="$(curl -sS -o /tmp/gh-pages-resp.json -w '%{http_code}' -X PUT \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  "https://api.github.com/repos/${OWNER}/${REPO}/pages" \
  -d '{"build_type":"workflow"}')"

if [[ "$code" == "204" ]]; then
  echo "Success (204). Pages will use your Actions workflow artifact."
elif [[ "$code" == "201" ]] || [[ "$code" == "200" ]]; then
  echo "Success (${code})."
else
  echo "GitHub API returned HTTP ${code}. Response:" >&2
  cat /tmp/gh-pages-resp.json >&2 || true
  exit 1
fi

echo ""
echo "Next: open Actions → run 'Deploy to GitHub Pages' (workflow_dispatch), or push to main."
echo "Then wait ~1–2 minutes and hard-refresh https://${OWNER}.github.io/"
