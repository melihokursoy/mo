import React, { useState } from 'react';
import { Button, Card, Input, Badge, Icon, Select, Countdown, Tag } from '@codecrib/ui';
import { Heart, Bell, Check } from '@codecrib/ui/icons';

const Demo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectValue, setSelectValue] = useState<string | undefined>(undefined);
  const [multiValue, setMultiValue] = useState<string[]>([]);
  const [groupValue, setGroupValue] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>(['Alpha', 'Beta', 'Gamma']);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const styles: { [k: string]: React.CSSProperties } = {
    container: { minHeight: '100vh', padding: '2rem', boxSizing: 'border-box' },
    inner: { maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' },
    header: { textAlign: 'center' },
    title: { fontSize: '2.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' },
    subtitle: { color: '#4B5563' },
    sectionTitle: { fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' },
    column: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
    row: { display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' },
    inputGroup: { display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 448 },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' },
    iconRow: { display: 'flex', alignItems: 'center', gap: '1rem' },
    smallSpacingTop: { marginTop: '0.5rem' },
    selectLeft: { minWidth: 280 },
    selectMiddle: { minWidth: 320 },
    selectRight: { minWidth: 320 },
    selectsRow: { display: 'flex', gap: '1rem', alignItems: 'flex-start' },
    selectBox: { flex: 1, minWidth: 0 },
    selectGroup: { marginTop: 12 },
    selectLabel: { display: 'block', marginBottom: 8, fontSize: 12, color: '#374151' },
    selectInfo: { marginTop: 8, fontSize: 13, color: '#6B7280' },
    cardTitle: { fontWeight: 600, marginBottom: '0.5rem' },
    cardText: { color: '#4B5563', fontSize: '0.875rem' },
    sectionSpacing: { marginTop: '1rem' },
    subsectionTitle: { fontSize: '1.125rem', fontWeight: 500, marginBottom: '0.5rem' },
    countdownRow: { display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' },
    countdownBox: { display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' },
    countdownLabel: { fontSize: 13, color: '#374151' },
    sizesRow: { display: 'flex', gap: '0.5rem', alignItems: 'center' },
  };

  // Use the same items (with Twemoji URLs) as the Select component story
  const selectItems = [
    { value: 'apple', label: 'Apple', icon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f34e.png' },
    { value: 'banana', label: 'Banana', icon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f34c.png' },
    { value: 'pear', label: 'Pear', icon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f350.png' },
    {
      label: 'Citrus',
      items: [
        { value: 'orange', label: 'Orange', icon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f34a.png' },
        { value: 'lemon', label: 'Lemon', icon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f34b.png' },
        { value: 'lime', label: 'Lime', icon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f34d.png' },
      ],
    },
    {
      label: 'Berries',
      items: [
        { value: 'strawberry', label: 'Strawberry', icon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f353.png' },
        { value: 'grapes', label: 'Grapes', icon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f347.png' },
        { value: 'cherries', label: 'Cherries', icon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f352.png' },
      ],
    },
    {
      label: 'Exotic',
      items: [
        { value: 'avocado', label: 'Avocado', icon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f951.png' },
        { value: 'kiwi', label: 'Kiwi', icon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f95d.png' },
        { value: 'mango', label: 'Mango', icon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f96d.png' },
      ],
    },
  ];

  // safe icon URLs for demo (guarding against undefined indexes)
  const appleIcon = selectItems[0]?.icon ?? '';
  const bananaIcon = selectItems[1]?.icon ?? '';
  const orangeIcon = selectItems[3]?.items?.[0]?.icon ?? '';

  return (
    <div style={styles.container}>
      <div style={styles.inner}>
        <header style={styles.header}>
          <h1 style={styles.title}>@codecrib/ui Component Library</h1>
          <p style={styles.subtitle}>A React UI component library built with TypeScript and TailwindCSS</p>
        </header>

        <Card variant="bordered">
          <h2 style={styles.sectionTitle}>Buttons</h2>
          <div style={styles.column}>
            <div style={styles.row}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div style={styles.row}>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <div style={styles.row}>
              <Button isLoading={isLoading} onClick={handleClick}>
                {isLoading ? 'Loading...' : 'Click to Load'}
              </Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </Card>

        <Card variant="bordered">
          <h2 style={styles.sectionTitle}>Badges</h2>
          <div style={styles.column}>
            <div style={styles.row}>
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>
            <div style={styles.row}>
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
            </div>
          </div>
        </Card>

        <Card variant="bordered">
          <h2 style={styles.sectionTitle}>Inputs</h2>
          <div style={styles.inputGroup}>
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              helperText="We'll never share your email."
            />
            <Input label="Password" type="password" placeholder="Enter your password" />
            <Input label="With Error" placeholder="Invalid input" error="This field is required" />
          </div>
        </Card>

       <Card variant="bordered">
          <h2 style={styles.sectionTitle}>Tags</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Variants</div>
                <div style={styles.row}>
                  <Tag icon={<Icon icon={Heart} weight="regular" />}>Default</Tag>
                  <Tag variant="success" icon={<Icon icon={Check} weight="regular" />}>Success</Tag>
                  <Tag variant="warning" icon={<Icon icon={Bell} weight="regular" />}>Warning</Tag>
                  <Tag variant="error" icon={<Icon icon={Bell} weight="regular" />}>Error</Tag>
                  <Tag variant="info" icon={<Icon icon={Heart} weight="regular" />}>Info</Tag>
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Sizes</div>
                <div style={styles.row}>
                  <Tag size="sm">Small</Tag>
                  <Tag size="md">Medium</Tag>
                  <Tag size="lg">Large</Tag>
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Removable</div>
                <div style={styles.row}>
                  {tags.map((t) => (
                    <Tag
                      key={t}
                      removable
                      removeLabel={`Remove ${t}`}
                      onRemove={() => setTags((s) => s.filter((x) => x !== t))}
                    >
                      {t}
                    </Tag>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Iconned (sizes)</div>
                <div style={styles.row}>
                  <Tag size="sm" icon={<Icon icon={Heart} weight="regular" />}>Small</Tag>
                  <Tag size="md" icon={<Icon icon={Check} weight="regular" />}>Medium</Tag>
                  <Tag size="lg" icon={<Icon icon={Bell} weight="regular" />}>Large</Tag>
                </div>
              </div>

                <div>
                  <div style={{ fontWeight: 600, marginBottom: 8 }}>Iconned (external URLs)</div>
                  <div style={styles.row}>
                    <Tag size="sm" icon={appleIcon}>Apple</Tag>
                    <Tag size="md" icon={bananaIcon}>Banana</Tag>
                    <Tag size="lg" icon={orangeIcon}>Orange</Tag>
                  </div>
                </div>
            </div>
          </div>
        </Card>

        <Card variant="bordered">
          <h2 style={styles.sectionTitle}>Selects</h2>
          <div style={styles.column}>
            <div style={styles.selectsRow}>
              <div style={styles.selectBox}>
                <label style={styles.selectLabel}>Single select</label>
                <Select
                  items={selectItems}
                  value={selectValue}
                  onChange={(v) => setSelectValue(v as string)}
                  placeholder="Pick a fruit"
                />
                <div style={styles.selectInfo}>Value: {selectValue ?? '—'}</div>
              </div>

              <div style={styles.selectBox}>
                <label style={styles.selectLabel}>Multi select</label>
                <Select
                  items={selectItems}
                  value={multiValue}
                  onChange={(v) => setMultiValue(Array.isArray(v) ? v : [v as string])}
                  multiselect
                  placeholder="Choose items"
                />
                <div style={styles.selectInfo}>Values: {multiValue.length ? multiValue.join(', ') : '—'}</div>
              </div>

              <div style={styles.selectBox}>
                <label style={styles.selectLabel}>Multi select (multiline)</label>
                <Select
                  items={selectItems}
                  value={groupValue}
                  onChange={(v) => setGroupValue(Array.isArray(v) ? v : [v as string])}
                  multiselect
                  multiline
                  placeholder="Choose fruits"
                />
                <div style={styles.selectInfo}>Values: {groupValue.length ? groupValue.join(', ') : '—'}</div>
              </div>
            </div>
          </div>
        </Card>

        <Card variant="bordered">
          <h2 style={styles.sectionTitle}>Countdowns</h2>
          <div style={styles.countdownRow}>
            <div style={styles.countdownBox}>
              <div style={styles.countdownLabel}>Primary / md</div>
              <Countdown deadline={Date.now() + 3 * 60 * 60 * 1000} variant="primary" size="md" />
            </div>

            <div style={styles.countdownBox}>
              <div style={styles.countdownLabel}>Secondary / md</div>
              <Countdown deadline={Date.now() + 4 * 60 * 60 * 1000} variant="secondary" size="md" />
            </div>

            <div style={styles.countdownBox}>
              <div style={styles.countdownLabel}>Outline / md</div>
              <Countdown deadline={Date.now() + 5 * 60 * 60 * 1000} variant="outline" size="md" />
            </div>

            <div style={styles.countdownBox}>
              <div style={styles.countdownLabel}>Ghost / md</div>
              <Countdown deadline={Date.now() + 6 * 60 * 60 * 1000} variant="ghost" size="md" />
            </div>

            <div style={styles.countdownBox}>
              <div style={styles.countdownLabel}>Sizes</div>
              <div style={styles.sizesRow}>
                <Countdown deadline={Date.now() + 7 * 60 * 60 * 1000} variant="primary" size="sm" />
                <Countdown deadline={Date.now() + 8 * 60 * 60 * 1000} variant="primary" size="md" />
                <Countdown deadline={Date.now() + 9 * 60 * 60 * 1000} variant="primary" size="lg" />
              </div>
            </div>
            <div style={styles.countdownBox}>
              <div style={styles.countdownLabel}>Expired / Primary / md</div>
              <Countdown deadline={Date.now() - 24 * 60 * 60 * 1000} variant="primary" size="md" />
            </div>

            <div style={styles.countdownBox}>
              <div style={styles.countdownLabel}>Expired / Secondary / md</div>
              <Countdown deadline={Date.now() - 24 * 60 * 60 * 1000} variant="secondary" size="md" />
            </div>

            <div style={styles.countdownBox}>
              <div style={styles.countdownLabel}>Expired / Outline / md</div>
              <Countdown deadline={Date.now() - 24 * 60 * 60 * 1000} variant="outline" size="md" />
            </div>

            <div style={styles.countdownBox}>
              <div style={styles.countdownLabel}>Expired / Ghost / md</div>
              <Countdown deadline={Date.now() - 24 * 60 * 60 * 1000} variant="ghost" size="md" />
            </div>
          </div>
        </Card>

  <Card variant="bordered">
          <h2 style={styles.sectionTitle}>Cards</h2>
          <div style={styles.grid}>
            <Card variant="default">
              <h3 style={styles.cardTitle}>Default Card</h3>
              <p style={styles.cardText}>This is a default card without border or shadow.</p>
            </Card>
            <Card variant="bordered">
              <h3 style={styles.cardTitle}>Bordered Card</h3>
              <p style={styles.cardText}>This card has a subtle border.</p>
            </Card>
            <Card variant="elevated">
              <h3 style={styles.cardTitle}>Elevated Card</h3>
              <p style={styles.cardText}>This card has a shadow for elevation.</p>
            </Card>
          </div>
       </Card>

        <Card variant="bordered">
          <h2 style={styles.sectionTitle}>Icons</h2>
          <div style={styles.iconRow}>
            <Icon icon={Heart} size={20} weight="thin" color="#ef4444" />
            <Icon icon={Bell} size={24} weight="regular" color="#0ea5e9" />
            <Icon icon={Check} size={28} weight="bold" color="#10b981" />
          </div>
          <div style={styles.sectionSpacing}>
            <h3 style={styles.subsectionTitle}>Buttons with Icons</h3>
            <div style={styles.column}>
              <div style={styles.row}>
                <Button size="sm" icon={<Heart />} iconPosition="left">Like</Button>
                <Button size="sm" icon={<Bell />} iconPosition="right">Notify</Button>
                <Button size="sm" variant="outline" icon={<Check />} iconPosition="left">Confirm</Button>
              </div>
              <div style={styles.row}>
                <Button size="md" icon={<Heart />} iconPosition="left">Like</Button>
                <Button size="md" icon={<Bell />} iconPosition="right">Notify</Button>
                <Button size="md" variant="outline" icon={<Check />} iconPosition="left">Confirm</Button>
              </div>
              <div style={styles.row}>
                <Button size="lg" icon={<Heart />} iconPosition="left">Like</Button>
                <Button size="lg" icon={<Bell />} iconPosition="right">Notify</Button>
                <Button size="lg" variant="outline" icon={<Check />} iconPosition="left">Confirm</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export { Demo };
export default Demo;
