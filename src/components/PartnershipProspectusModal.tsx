import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

interface PartnershipProspectusModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PartnershipProspectusModal({
  open,
  onOpenChange,
}: PartnershipProspectusModalProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [designation, setDesignation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setFirstName('');
      setLastName('');
      setDesignation('');
      setIsSubmitted(false);
      onOpenChange(false);
    }, 2000);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setFirstName('');
      setLastName('');
      setDesignation('');
      setIsSubmitted(false);
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">
            Request Partnership Prospectus
          </DialogTitle>
          <DialogDescription>
            Fill out the form below to receive our partnership prospectus with
            detailed information about sponsorship opportunities.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="text-[#DC143C] text-4xl mb-4">✓</div>
            <p className="text-lg font-medium">Thank you!</p>
            <p className="text-muted-foreground">
              We'll send the prospectus to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-border bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-border bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="designation"
                className="block text-sm font-medium mb-2"
              >
                Designation / Title
              </label>
              <input
                type="text"
                id="designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                required
                className="w-full px-4 py-3 border border-border bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent transition-all"
                placeholder="CEO, Director, etc."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-[#DC143C] text-background font-medium transition-all duration-[180ms] hover:-translate-y-0.5 hover:shadow-lg ease-[cubic-bezier(0.16,1,0.3,1)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
