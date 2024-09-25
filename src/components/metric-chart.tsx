'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from 'next-themes';

type MetricData = {
  name: string;
  value: number;
};

type MetricsDataType = {
  [key: string]: MetricData[];
};

const metricsData: MetricsDataType = {
  'Most Watched Genres': [
    { name: 'Action', value: 300 },
    { name: 'Comedy', value: 250 },
    { name: 'Drama', value: 200 },
    { name: 'Sci-Fi', value: 150 },
    { name: 'Horror', value: 100 },
  ],
  'Most Watched TV Shows': [
    { name: 'Stranger Things', value: 500 },
    { name: 'The Crown', value: 450 },
    { name: 'Breaking Bad', value: 400 },
    { name: 'Game of Thrones', value: 350 },
    { name: 'Friends', value: 300 },
  ],
  'Most Watched Movies': [
    { name: 'Inception', value: 400 },
    { name: 'Shawshank Redemption', value: 380 },
    { name: 'Pulp Fiction', value: 360 },
    { name: 'The Dark Knight', value: 340 },
    { name: 'Forrest Gump', value: 320 },
  ],
  'Highest Rated Movies': [
    { name: 'The Godfather', value: 9.2 },
    { name: 'Shawshank Redemption', value: 9.3 },
    { name: '12 Angry Men', value: 9.0 },
    { name: 'Schindler\'s List', value: 8.9 },
    { name: 'Lord of the Rings', value: 8.8 },
  ],
  'Most Controversial Movies': [
    { name: 'A Clockwork Orange', value: 80 },
    { name: 'Wolf of Wall Street', value: 75 },
    { name: 'Requiem for a Dream', value: 70 },
    { name: 'Natural Born Killers', value: 65 },
    { name: 'Crash', value: 60 },
  ],
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const InteractiveMetricsChart = () => {
  const [selectedMetric, setSelectedMetric] = useState<string>('Most Watched Genres');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setMounted(true);
  }, []);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  if (!mounted) {
    return null;
  }

  const fillColor = theme === 'dark' ? '#f5f5f5' : '#333333';
  const strokeColor = theme === 'dark' ? '#000000' : '#ffffff';

  const getRadii = () => {
    if (width < 480) {
      return { innerRadius: 40, outerRadius: 60 };
    } else if (width < 768) {
      return { innerRadius: 60, outerRadius: 80 };
    } else {
      return { innerRadius: 60, outerRadius: 80 };
    }
  };

  const { innerRadius, outerRadius } = getRadii();

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fillColor}>{`PV ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill={fillColor}>
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };
  return (
    <Card className="w-full h-full max-w-3xl mx-auto text-xs">
      <CardContent className='flex flex-col py-4 items-center justify-center'>
        <Select
          value={selectedMetric}
          onValueChange={(value: string) => setSelectedMetric(value)}
        >
          <SelectTrigger className="w-full mb-4">
            <SelectValue placeholder="Select a metric" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(metricsData).map((metric) => (
              <SelectItem key={metric} value={metric}>
                {metric}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <motion.div
          key={selectedMetric}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-[30dvh] flex justify-center items-center"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={metricsData[selectedMetric]}
                cx="50%"
                cy="50%"
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                stroke={strokeColor}
                fill={fillColor}
                dataKey="value"
                onMouseEnter={onPieEnter}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default InteractiveMetricsChart;