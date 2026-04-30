import { TEMPLATE_PROFILE_DEMOS } from './templateProfileDemos.js'

/** Profile ids shown on Saved business (bookmark-style demo set). */
export const SAVED_BUSINESS_PROFILE_IDS = [
  'l-2',
  'l-5',
  'l-9',
  'l-12',
  'l-6',
  'l-11',
]

/** Profile ids for Recently visited (recency order, newest first). */
export const RECENT_BUSINESS_PROFILE_IDS = [
  'l-3',
  'l-7',
  'l-1',
  'l-4',
  'l-8',
  'l-10',
]

export function getDemosOrderedByProfileIds(ids) {
  const byId = new Map(TEMPLATE_PROFILE_DEMOS.map((d) => [d.profileId, d]))
  return ids.map((id) => byId.get(id)).filter(Boolean)
}
