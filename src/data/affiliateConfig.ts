export interface AffiliateProgram {
  name: string;
  network: 'A8' | 'other';
  rewardYen: number;
  status: 'active' | 'pending' | 'url_pending';
  affiliateUrl: string;
}

export interface AffiliatePlacement {
  title: string;
  description: string;
  buttonText: string;
  affiliateUrl: string;
  note: string;
}

const PR_NOTE = '※PR: 本記事にはアフィリエイト広告が含まれます';

export const affiliatePrograms = {
  kagiTroubleConsultation: {
    name: '鍵トラブル相談窓口（プレースホルダー）',
    network: 'other',
    rewardYen: 7000,
    status: 'url_pending',
    affiliateUrl: 'https://example.com/affiliate/placeholder-kagi-1',
  },
  emergencySupportDesk: {
    name: '緊急かけつけサポート（プレースホルダー）',
    network: 'other',
    rewardYen: 6500,
    status: 'pending',
    affiliateUrl: 'https://example.com/affiliate/placeholder-kagi-2',
  },
  lockExchangeService: {
    name: '鍵交換・修理相談（プレースホルダー）',
    network: 'other',
    rewardYen: 6000,
    status: 'pending',
    affiliateUrl: 'https://example.com/affiliate/placeholder-kagi-3',
  },
} as const satisfies Record<string, AffiliateProgram>;

export const affiliatePlacements = {
  top: {
    title: '鍵トラブルの無料見積もりをまとめて確認',
    description:
      '鍵トラブル相談窓口は、開錠・鍵交換・修理など幅広い相談に対応可能です。まずは希望日時と症状を入力して料金目安を確認しましょう。',
    buttonText: '鍵トラブル相談窓口の無料見積もりを確認する →',
    affiliateUrl: affiliatePrograms.kagiTroubleConsultation.affiliateUrl,
    note: PR_NOTE,
  },
  middle: {
    title: '深夜や休日の緊急対応を比較したい方へ',
    description:
      '緊急かけつけサポートは、時間外対応を含めた相談に向いています。到着時間と追加料金の条件を整理して比較できます。',
    buttonText: '緊急かけつけサポートの対応条件を見る →',
    affiliateUrl: affiliatePrograms.emergencySupportDesk.affiliateUrl,
    note: PR_NOTE,
  },
  bottom: {
    title: '最後に保証内容を確認して依頼先を決定',
    description:
      '鍵交換・修理相談は提携準備中のため、正式リンクは後日反映予定です。保証期間や対応範囲を比較する候補として確認しておきましょう。',
    buttonText: '鍵交換・修理相談の最新情報を確認する →',
    affiliateUrl: affiliatePrograms.lockExchangeService.affiliateUrl,
    note: PR_NOTE,
  },
} as const satisfies Record<'top' | 'middle' | 'bottom', AffiliatePlacement>;
