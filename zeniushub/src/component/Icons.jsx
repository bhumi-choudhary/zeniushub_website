// src/components/ui/Icons.js
import React from "react";
import {
    ArrowLeft,
    ArrowRight,
    Home,
    User,
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
    List
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
    search: createIcon(Search, { size: 24, className: "text-black" }),
    setting: createIcon(Settings, { size: 24, className: "text-black" }),
    bell: createIcon(Bell, { size: 24, className: "text-black" }),
    logout: createIcon(LogOut, { size: 24, className: "text-black" }),
    edit2: createIcon(Edit2, { size: 24, className: "text-black" }),
    trash: createIcon(Trash2, { size: 24, className: "text-black" }),
    plus: createIcon(Plus, { size: 24, className: "text-black" }),
    plus: createIcon(Plus, { size: 24, className: "text-black" }),
    phone: createIcon(Phone, { size: 24, className: "text-black" }),
    mail: createIcon(Mail, { size: 24, className: "text-black" }),
    list: createIcon(List, { size: 24, className: "text-black" }),
    x: createIcon(X, { size: 24, className: "text-black" }),
};
