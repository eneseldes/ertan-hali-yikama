// Tüm ikonlar react-icons'tan, anlamlı isimlerle yeniden export ediliyor.
import {
  FiPhone,
  FiPhoneCall,
  FiTruck,
  FiShield,
  FiClock,
  FiTag,
  FiMapPin,
  FiMenu,
  FiX,
  FiDroplet,
  FiChevronDown,
  FiCheckCircle,
  FiLayers,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineWeekend, MdOutlineCurtains } from 'react-icons/md'
import { IoBedOutline } from 'react-icons/io5'
import { PiSparkleFill } from 'react-icons/pi'
import { GiWashingMachine } from 'react-icons/gi'

export const PhoneIcon = FiPhone
export const PhoneCallIcon = FiPhoneCall
export const WhatsAppIcon = FaWhatsapp
export const DropletIcon = FiDroplet
export const SparkleIcon = PiSparkleFill
export const BlanketIcon = FiLayers
export const SofaIcon = MdOutlineWeekend
export const CurtainIcon = MdOutlineCurtains
export const BedIcon = IoBedOutline
export const TruckIcon = FiTruck
export const ShieldIcon = FiShield
export const ClockIcon = FiClock
export const TagIcon = FiTag
export const MapPinIcon = FiMapPin
export const MenuIcon = FiMenu
export const CloseIcon = FiX
export const ChevronDownIcon = FiChevronDown
export const CheckCircleIcon = FiCheckCircle
export const WashingMachineIcon = GiWashingMachine

// Hizmet kartı ikonları
export const iconMap = {
  droplet: DropletIcon,
  sparkle: SparkleIcon,
  blanket: BlanketIcon,
  sofa: SofaIcon,
  curtain: CurtainIcon,
  bed: BedIcon,
  truck: TruckIcon,
  shield: ShieldIcon,
  clock: ClockIcon,
  tag: TagIcon,
}

// Nasıl Çalışır adım ikonları
export const stepIconMap = {
  phoneCall: PhoneCallIcon,
  truck: TruckIcon,
  washer: WashingMachineIcon,
  check: CheckCircleIcon,
}
