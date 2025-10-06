// src/components/ui/Icons.js
import React from "react";
import {
    ArrowLeft,
    ArrowRight,
    Home,
    User,
    Users,
    Search,
    Settings,
    Bell,
    LogOut,
    Edit2,
    Trash2,
    Plus,
    Check,
    X,
    Mail,
    Phone,
    ToggleLeftIcon,
    List,
    MapPin,
    Award,
    Shield,
    BarChart3,
    Rocket,
    CheckCircle2,
    HeartHandshake,
    BadgeCheck,
    Cpu,
    Globe,
    Clock,
    Sparkles
} from "lucide-react";

// Wrapper function to add default props like size & className
const createIcon = (IconComponent, defaultProps = {}) => {
    return (props) => <IconComponent {...defaultProps} {...props} />;
};

// All icons stored in a single object
export const ICONS = {
    arrowleft: createIcon(ArrowLeft, { size: 24, className: "text-black" }),
    arrowright: createIcon(ArrowRight, { size: 24, className: "text-black" }),
    home: createIcon(Home, { size: 24, className: "text-black" }),
    user: createIcon(User, { size: 24, className: "text-black" }),
    Users: createIcon(Users, { size: 24, className: "text-black" }),
    search: createIcon(Search, { size: 24, className: "text-black" }),
    setting: createIcon(Settings, { size: 24, className: "text-black" }),
    bell: createIcon(Bell, { size: 24, className: "text-black" }),
    logout: createIcon(LogOut, { size: 24, className: "text-black" }),
    edit2: createIcon(Edit2, { size: 24, className: "text-black" }),
    trash: createIcon(Trash2, { size: 24, className: "text-black" }),
    plus: createIcon(Plus, { size: 24, className: "text-black" }),
    phone: createIcon(Phone, { size: 24, className: "text-black" }),
    mail: createIcon(Mail, { size: 24, className: "text-black" }),
    list: createIcon(List, { size: 24, className: "text-black" }),
    x: createIcon(X, { size: 24, className: "text-black" }),
    mappin: createIcon(MapPin, { size: 24, className: "text-black" }),
    MapPin: createIcon(MapPin, { size: 24, className: "text-black" }),
    award: createIcon(Award, { size: 24, className: "text-black" }),
    shield: createIcon(Shield, { size: 24, className: "text-black" }),
    barchart3: createIcon(BarChart3, { size: 24, className: "text-black" }),
    Rocket: createIcon(Rocket, { size: 24, className: "text-black" }),
    CheckCircle2: createIcon(CheckCircle2, { size: 24, className: "text-black" }),
    hearthandshake: createIcon(HeartHandshake, { size: 24, className: "text-black" }),
    badgecheck: createIcon(BadgeCheck, { size: 24, className: "text-black" }),
    cpu: createIcon(Cpu, { size: 24, className: "text-black" }),
    globe: createIcon(Globe, { size: 24, className: "text-black" }),
    clock: createIcon(Clock, { size: 24, className: "text-black" }),
    sparkles: createIcon(Sparkles, { size: 24, className: "text-black" })
};
