import type { Commodity } from "@/interfaces/commodity/commodity";
import { COMMODITY_CATEGORY } from "@/interfaces/commodity/commodity-category";
import { COMMODITY_STATUS } from "@/interfaces/commodity/commodity-status";
import { ROLE } from "@/interfaces/role";
import BananaImage from "@/assets/commodity/Golden Banana Bread and Rustic Charm.png";

export const COMMODITY_DATA: Commodity = {
  id: "com_abc123xyz",
  name: "Gạo Jasmine",
  description: "Gạo Jasmine thơm ngon, hạt dài, trắng ngần.",
  category: COMMODITY_CATEGORY.Grain,
  price: 2.5,
  expirationDate: "2026-12-31",
  status: COMMODITY_STATUS.Active,
  image: BananaImage,
  publicImageId: "public_id_gao_jasmine_123",
  supplier: {
    id: "sup_def456uvw",
    name: "Công ty Lúa Vàng",
    contactName: "Nguyễn Văn A",
    phoneCode: "+84",
    phoneNumber: "987654321",
    email: "luavang@example.com",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    countryCode: "VN",
    countryName: "Việt Nam",
    provinceCode: "SG",
    provinceName: "Hồ Chí Minh",
    supplierRole: ROLE.SUPPLIER_COMMODITY,
  },
};
