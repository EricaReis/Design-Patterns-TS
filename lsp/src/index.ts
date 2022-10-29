import { createDecipheriv } from "crypto";
import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankRewards from "./NubankRewards";

// const card = new CreditCard();
const card = new NubankRewards();

card.validate();
card.collectPayment();
