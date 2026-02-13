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
    rewardYen: 0,
    status: 'active',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AXA8I+50ZSOI+39BC+5YJRM',
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
    title: '鍵の修理・交換費用を比較したい方へ',
    description:
      '鍵修理屋は鍵紛失・修理に対応。見積もり条件を整理しながら比較検討できます。',
    buttonText: '鍵修理屋に無料見積もりを依頼する →',
    affiliateUrl: affiliatePrograms.kagiShuriya.affiliateUrl,
    note: PR_NOTE,
  },
  bottom: {
    title: '合鍵作成ならオンラインで手軽に',
    description:
      '俺の合鍵は写メで簡単に合鍵作成。全国送料無料で届きます。スペアキーの準備にどうぞ。',
    buttonText: '俺の合鍵で合鍵を作る →',
    affiliateUrl: affiliatePrograms.orenoAikagi.affiliateUrl,
    note: PR_NOTE,
  },
};
