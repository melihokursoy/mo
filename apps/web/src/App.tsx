import { useState } from "react";
import { Button, Card, Input, Badge, Icon } from "@codecrib/ui";
import { Heart, Bell, Check } from "@codecrib/ui/icons";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            @codecrib/ui Component Library
          </h1>
          <p className="text-gray-600">
            A React UI component library built with TypeScript and TailwindCSS
          </p>
        </header>

        {/* Buttons Section */}
        <Card variant="bordered">
          <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button isLoading={isLoading} onClick={handleClick}>
                {isLoading ? "Loading..." : "Click to Load"}
              </Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </Card>

        {/* Badges Section */}
        <Card variant="bordered">
          <h2 className="text-2xl font-semibold mb-4">Badges</h2>
          <div className="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
          </div>
        </Card>

        {/* Input Section */}
        <Card variant="bordered">
          <h2 className="text-2xl font-semibold mb-4">Inputs</h2>
          <div className="space-y-4 max-w-md">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              helperText="We'll never share your email."
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <Input
              label="With Error"
              placeholder="Invalid input"
              error="This field is required"
            />
          </div>
        </Card>

        {/* Cards Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card variant="default">
              <h3 className="font-semibold mb-2">Default Card</h3>
              <p className="text-gray-600 text-sm">
                This is a default card without border or shadow.
              </p>
            </Card>
            <Card variant="bordered">
              <h3 className="font-semibold mb-2">Bordered Card</h3>
              <p className="text-gray-600 text-sm">
                This card has a subtle border.
              </p>
            </Card>
            <Card variant="elevated">
              <h3 className="font-semibold mb-2">Elevated Card</h3>
              <p className="text-gray-600 text-sm">
                This card has a shadow for elevation.
              </p>
            </Card>
          </div>
        </div>

        {/* Icons Section */}
        <Card variant="bordered">
          <h2 className="text-2xl font-semibold mb-4">Icons</h2>
          <div className="flex items-center gap-4">
            <Icon icon={Heart} size={20} weight="thin" color="#ef4444" />
            <Icon icon={Bell} size={24} weight="regular" color="#0ea5e9" />
            <Icon icon={Check} size={28} weight="bold" color="#10b981" />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Buttons with Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button size="sm" icon={<Heart />} iconPosition="left">Like</Button>
              <Button size="sm" icon={<Bell  />} iconPosition="right">Notify</Button>
              <Button size="sm" variant="outline" icon={<Check />} iconPosition="left">Confirm</Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <Button size="md" icon={<Heart />} iconPosition="left">Like</Button>
              <Button size="md" icon={<Bell  />} iconPosition="right">Notify</Button>
              <Button size="md" variant="outline" icon={<Check />} iconPosition="left">Confirm</Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <Button size="lg" icon={<Heart />} iconPosition="left">Like</Button>
              <Button size="lg" icon={<Bell  />} iconPosition="right">Notify</Button>
              <Button size="lg" variant="outline" icon={<Check />} iconPosition="left">Confirm</Button>
            </div>

          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
