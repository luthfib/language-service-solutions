'use client';

import type React from 'react';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface ContactButtonProps {
    variant?: 'default' | 'outline' | 'secondary';
    size?: 'sm' | 'default' | 'lg';
    className?: string;
    children?: React.ReactNode;
}

export default function ContactButton({
    variant = 'default',
    size = 'default',
    className = '',
    children = 'Contact Us',
}: ContactButtonProps) {
    return (
        <Button asChild variant={variant} size={size} className={className}>
            <Link href="/contact" className="inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                {children}
            </Link>
        </Button>
    );
}
