import type { Crop } from "@/interfaces/crop/crop";
import { ROLE } from "@/interfaces/role";

export const CROP_DATA: Crop = {
  id: "crop-123",
  icon: "https://example.com/crop-icon.png",
  name: "Cà chua thân gỗ",
  cycle: "Hàng năm",
  edible: true,
  soil: "Đất phù sa màu mỡ",
  watering: "Tưới 2 lần/ngày",
  maintenance: "Cắt tỉa cành khô, bón phân định kỳ",
  hardinessZone: 9,
  indoor: false,
  propagation: "Gieo hạt",
  careLevel: "Trung bình",
  growthRate: "Nhanh",
  description:
    "Cà chua thân gỗ là loại cây ăn quả nhiệt đới, có vị ngọt thanh.",
  cultivatedArea: 100, // mét vuông
  plantedDate: "2025-05-15",
  expectedDate: "2025-08-15",
  quantity: 500, // kg
  publicImageId: "image-crop-abc",
  cropType: {
    id: "type-fruit",
    name: "Cây ăn quả",
    code: "FRUIT",
    type: "fruit",
  },
  supplier: {
    id: "supplier-456",
    name: "Công ty Nông sản Xanh",
    contactName: "Nguyễn Văn A",
    phoneCode: "+84",
    phoneNumber: "987654321",
    email: "nguyenvana@nongsanxanh.com",
    address: "123 Đường B, Quận C, TP.HCM",
    countryCode: "VN",
    countryName: "Việt Nam",
    provinceCode: "HCM",
    provinceName: "Hồ Chí Minh",
    supplierRole: ROLE.CUSTOMER,
  },
};
