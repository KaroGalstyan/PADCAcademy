export interface IPaymentModalProps {
  visible: boolean;
  onClose: () => void;
  loading?: boolean;
  error?: string | null;
}

export interface IPricingCard {
  title: string;
  price: string;
  time: string;
  features: string[];
  bg: string;
  border: string;
  type: "gradient" | "outlined";
}

export interface IPricingCardProps {
  item: IPricingCard;
  onPress: () => void;
  loading: boolean;
}

export interface IPricingListProps {
  priceList: IPricingCard[];
  onGetStarted: (price: string) => void;
  loading: boolean;
}
