/**
 * Affiliate placement configuration (ESM)
 *
 * Single source of truth for CTA content across all articles.
 * Used by rehype-affiliate-cta plugin in astro.config.mjs.
 * Update URLs and copy here when affiliate programs change.
 */

const PR_NOTE = '※PR: 本記事にはアフィリエイト広告が含まれます';

export const affiliatePrograms = {
  kagi110: {
    name: 'カギ110番',
    network: 'A8',
    rewardYen: 6000,
    status: 'active',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AXA8I+50EIH6+39GM+354KNM',
  },
  kagiShuriya: {
    name: '鍵修理屋',
    network: 'A8',
    rewardYen: 200,
    status: 'active',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AXA8I+4QA56Y+36X8+2Z68LU',
  },
  orenoAikagi: {
    name: '俺の合鍵',
    network: 'A8',
    rewardYen: -1, // 要確認（ASP管理画面で要確認）
    status: 'active',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AXA8I+50ZSOI+39BC+5YJRM',
  },
  kagizaru: {
    name: '鍵屋の鍵猿',
    network: 'moshimo',
    rewardYen: -1, // 要確認（推定¥5,000前後、もしも管理画面で確認）
    status: 'active',
    clickUrl: '//af.moshimo.com/af/c/click?a_id=5382118&p_id=6995&pc_id=20002&pl_id=88370',
    impressionUrl: '//i.moshimo.com/af/i/impression?a_id=5382118&p_id=6995&pc_id=20002&pl_id=88370',
  },
};

export const affiliatePlacements = {
  top: {
    title: '鍵トラブルの無料相談で対応可否を確認',
    description:
      'カギ110番は24時間365日対応。鍵の紛失・故障・交換など、まずは状況を伝えて費用目安を確認しましょう。',
    buttonText: 'カギ110番に無料相談する →',
    affiliateUrl: affiliatePrograms.kagi110.affiliateUrl,
    note: PR_NOTE,
  },
  middle: {
    title: '鍵のトラブルをスピード解決',
    description:
      '鍵屋の鍵猿は鍵の紛失・故障・交換に即日対応。出張サービスでスピード解決します。',
    buttonText: '鍵屋の鍵猿に相談する →',
    clickUrl: affiliatePrograms.kagizaru.clickUrl,
    impressionUrl: affiliatePrograms.kagizaru.impressionUrl,
    note: PR_NOTE,
  },
  bottom: {
    title: '鍵の修理・交換費用を比較したい方へ',
    description:
      '鍵修理屋は鍵紛失・修理に対応。見積もり条件を整理しながら比較検討できます。',
    buttonText: '鍵修理屋に無料見積もりを依頼する →',
    affiliateUrl: affiliatePrograms.kagiShuriya.affiliateUrl,
    note: PR_NOTE,
  },
};
