import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, Chip, Icon, Text, Divider, Checkbox } from '@/components/atom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  SearchBar,
} from '@/components/molecule';
import { Filter, Plus, GitCommit, Users, PlusCircle } from 'lucide-react-native';

function ProgressBar({ progress }: { progress: number }) {
  return (
    <View className="h-2 w-full rounded-full bg-muted">
      <View style={{ width: `${progress}%` }} className="h-2 rounded-full bg-primary" />
    </View>
  );
}

function SectionHeader({ title, actionLabel }: { title: string; actionLabel?: string }) {
  return (
    <View className="mb-2 mt-6 flex-row items-center justify-between">
      <Text variant="h4">{title}</Text>
      {actionLabel ? <Text className="text-sm text-primary">{actionLabel}</Text> : null}
    </View>
  );
}

function KPI({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>
          <Text className="text-xs text-muted-foreground">{label}</Text>
        </CardDescription>
        <CardTitle>
          <Text className="text-2xl">{value}</Text>
        </CardTitle>
      </CardHeader>
      {sub ? (
        <CardContent className="pt-0">
          <Text className="text-xs text-muted-foreground">{sub}</Text>
        </CardContent>
      ) : null}
    </Card>
  );
}

export default function Dashboard() {
  return (
    <View className="flex-1 bg-background p-6">
      <View className="mb-4 flex-row items-center justify-between">
        <View>
          <Text variant="h3">Dashboard</Text>
          <Text variant="muted">Project overview, progress and health at a glance</Text>
        </View>
        <View className="flex-row gap-2">
          <Button variant="outline">
            <View className="flex-row items-center gap-2">
              <Icon as={Filter} />
              <Text>Filters</Text>
            </View>
          </Button>
          <Button>
            <View className="flex-row items-center gap-2">
              <Icon as={Plus} />
              <Text>New Project</Text>
            </View>
          </Button>
        </View>
      </View>

      <Card>
        <CardContent className="pt-4">
          <View className="flex-row flex-wrap items-center gap-3">
            <View className="min-w-[220px] flex-1">
              <SearchBar placeholder="Search projects…" />
            </View>
            <View className="flex-row flex-wrap gap-2">
              <Chip label="Active" />
              <Chip variant="secondary" label="Planned" />
              <Chip variant="outline" label="Paused" />
              <Chip variant="outline" label="Done" />
            </View>
          </View>
        </CardContent>
      </Card>

      <View className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI label="Total Projects" value="—" sub="Across all workstreams" />
        <KPI label="Active" value="—" sub="Currently in progress" />
        <KPI label="Avg Progress" value="—" sub="Across active projects" />
        <KPI label="On-time %" value="—" sub="Done − overdue / total" />
      </View>

      <SectionHeader title="Projects" actionLabel="View more" />
      <View className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>
              <Text>Projects Overview</Text>
            </CardTitle>
            <CardDescription>
              <Text className="text-sm text-muted-foreground">
                Snapshot of all projects, status, and progress
              </Text>
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <View>
              <Text className="text-sm font-medium">Project A</Text>
              <ProgressBar progress={75} />
            </View>
            <View>
              <Text className="text-sm font-medium">Project B</Text>
              <ProgressBar progress={100} />
            </View>
            <View>
              <Text className="text-sm font-medium">Project C</Text>
              <ProgressBar progress={10} />
            </View>
          </CardContent>
          <CardFooter className="justify-end">
            <Button variant="outline">
              <Text>See all</Text>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>
              <Text>Overview Notes</Text>
            </CardTitle>
            <CardDescription>
              <Text className="text-sm text-muted-foreground">
                Key highlights, context, and decisions
              </Text>
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-3">
            <View className="flex-row gap-2">
              <Text className="text-sm text-muted-foreground">•</Text>
              <Text className="flex-1 text-sm text-muted-foreground">
                Met with stakeholders to discuss Project A timeline.
              </Text>
            </View>
            <View className="flex-row gap-2">
              <Text className="text-sm text-muted-foreground">•</Text>
              <Text className="flex-1 text-sm text-muted-foreground">
                UX team presented new mockups for Project B.
              </Text>
            </View>
          </CardContent>
          <CardFooter className="justify-end">
            <Button variant="outline">
              <Text>See all</Text>
            </Button>
          </CardFooter>
        </Card>
      </View>
      <View className="mt-4 flex-row gap-4">
        <View className="flex-[2]">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>
                <Text>To Do</Text>
              </CardTitle>
              <CardDescription>
                <Text className="text-sm text-muted-foreground">
                  Your next actions, sorted by priority
                </Text>
              </CardDescription>
            </CardHeader>
            <CardContent className="gap-3">
              {/* Task 1 */}
              {(() => {
                const [checked, setChecked] = useState(false);
                return (
                  <View className="flex-row items-center gap-2">
                    <Checkbox id="task1" checked={checked} onCheckedChange={setChecked} />
                    <Text className="text-sm font-medium">Finalize Project A budget</Text>
                  </View>
                );
              })()}

              {/* Task 2 */}
              {(() => {
                const [checked, setChecked] = useState(false);
                return (
                  <View className="flex-row items-center gap-2">
                    <Checkbox id="task2" checked={checked} onCheckedChange={setChecked} />
                    <Text className="text-sm font-medium">Review Project B mockups</Text>
                  </View>
                );
              })()}

              {/* Task 3 */}
              {(() => {
                const [checked, setChecked] = useState(false);
                return (
                  <View className="flex-row items-center gap-2">
                    <Checkbox id="task3" checked={checked} onCheckedChange={setChecked} />
                    <Text className="text-sm font-medium">Schedule Project C kickoff meeting</Text>
                  </View>
                );
              })()}
            </CardContent>
            <CardFooter className="justify-end">
              <Button variant="outline">
                <Text>See all</Text>
              </Button>
            </CardFooter>
          </Card>
        </View>

        <View className="flex-[1]">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>
                <Text>Recent Activity</Text>
              </CardTitle>
              <CardDescription>
                <Text className="text-sm text-muted-foreground">
                  Latest updates, changes, and commits
                </Text>
              </CardDescription>
            </CardHeader>
            <CardContent className="gap-3">
              <View className="flex-row items-center gap-2">
                <Icon as={GitCommit} className="text-muted-foreground" />
                <Text className="flex-1 text-sm text-muted-foreground">
                  John pushed a commit to Project A.
                </Text>
              </View>
              <View className="flex-row items-center gap-2">
                <Icon as={Users} className="text-muted-foreground" />
                <Text className="flex-1 text-sm text-muted-foreground">
                  Jane updated the status of Project B.
                </Text>
              </View>
              <View className="flex-row items-center gap-2">
                <Icon as={PlusCircle} className="text-muted-foreground" />
                <Text className="flex-1 text-sm text-muted-foreground">
                  You created a new task for Project C.
                </Text>
              </View>
            </CardContent>
            <CardFooter className="justify-end">
              <Button variant="outline">
                <Text>See all</Text>
              </Button>
            </CardFooter>
          </Card>
        </View>
      </View>
      <Divider className="my-6" />
    </View>
  );
}
